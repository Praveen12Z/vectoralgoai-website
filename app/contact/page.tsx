import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="px-20 py-20 w-[600px]">
        <h1 className="text-4xl font-bold">Contact Us</h1>

        <p className="text-gray-400 mt-4">
          Need help? Want a demo? Email us:
        </p>

        <ul className="mt-6 text-gray-300 space-y-2">
          <li>📩 info@vectoralgoai.com</li>
          <li>📩 founder@vectoralgoai.com</li>
          <li>📩 contact@vectoralgoai.com</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}
