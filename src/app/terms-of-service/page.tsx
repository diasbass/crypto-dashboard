import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - BTCrypto Watch',
  description: 'Confira os Termos de Serviço para usar o BTCrypto Watch de forma segura e consciente.',
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        By accessing BTCrypto Watch, you agree to comply with these Terms and all applicable laws and regulations.
      </p>
      <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
      <p className="mb-4">
        All content on this site is protected by copyright laws. You may not reproduce or distribute any materials without permission.
      </p>
      <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
      <p className="mb-4">
        Information provided on BTCrypto Watch is for informational purposes only and does not constitute financial advice.
      </p>
      <h2 className="text-xl font-semibold mb-2">Changes</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms at any time. Continued use of the site implies acceptance of the updated terms.
      </p>
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p>If you have questions, visit the <a href="/contact" className="text-yellow-400 underline">Contact page</a>.</p>
    </div>
  );
}
