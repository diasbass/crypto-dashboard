import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white p-4">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <ContactForm />
    </div>
  );
}
