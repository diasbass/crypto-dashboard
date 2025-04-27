import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Controle simples de limite de envios por IP (em memória)
const ipSendTimestamps = new Map<string, number>();

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
    }

    // Captura o IP do cliente
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    const now = Date.now();
    const lastSent = ipSendTimestamps.get(ip) || 0;
    const timeDiff = now - lastSent;

    // Permitir apenas 1 envio a cada 60 segundos por IP
    if (timeDiff < 60000) {
      return NextResponse.json({ success: false, message: 'Please wait a minute before sending another message.' }, { status: 429 });
    }

    ipSendTimestamps.set(ip, now);

    // Configura o transportador de e-mail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BTCrypto Watch Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New message received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
