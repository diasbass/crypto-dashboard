import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  console.log('Recebido no backend:', { name, email, message }); // 👈 Log para conferir se chegou

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Contato BTCrypto Watch" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem de ${name}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    console.log('E-mail enviado! ID:', info.messageId); // 👈 Log para conferir se foi enviado

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error); // 👈 Log do erro se acontecer
    return NextResponse.json({ success: false, error: 'Erro ao enviar o e-mail.' }, { status: 500 });
  }
}
