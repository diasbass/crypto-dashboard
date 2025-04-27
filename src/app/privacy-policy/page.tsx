import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - BTCrypto Watch',
  description: 'Leia nossa Política de Privacidade para entender como protegemos seus dados no BTCrypto Watch.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        The BTCrypto Watch respects your privacy and is committed to protecting your personal data.
      </p>
      <h2 className="text-xl font-semibold mb-2">Information Collected</h2>
      <p className="mb-4">
        We collect information such as IP address, browser type, device data, and navigation history to improve your experience.
      </p>
      <h2 className="text-xl font-semibold mb-2">Cookies</h2>
      <p className="mb-4">
        We use cookies to personalize content, ads, and to analyze our traffic.
      </p>
      <h2 className="text-xl font-semibold mb-2">Use of Information</h2>
      <p className="mb-4">
        Information collected is used solely to improve our services and personalize ads via Google AdSense.
      </p>
      <h2 className="text-xl font-semibold mb-2">Data Sharing</h2>
      <p className="mb-4">
        We do not sell or share your personal data with third parties.
      </p>
      <h2 className="text-xl font-semibold mb-2">Changes</h2>
      <p className="mb-4">
        This policy may be updated periodically. Please review it regularly.
      </p>
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p>If you have any questions, please contact us via the <a href="/contact" className="text-yellow-400 underline">Contact page</a>.</p>
    </div>
  );
}
