import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <section className="flex justify-between items-center px-20 py-32">
        <div className="max-w-xl">
          <h1 className="text-6xl font-extrabold">
            Build. Crash-test. Understand.
          </h1>

          <p className="text-xl mt-5 text-gray-300">
            AI-powered strategy validation for serious traders.
          </p>

          <div className="mt-10 flex space-x-6">
            <a
              href="/dashboard"
              className="bg-blueAccent px-8 py-3 rounded-lg font-bold"
            >
              🚀 Open Dashboard
            </a>

            <a
              href="/product"
              className="border border-blueAccent px-8 py-3 rounded-lg font-bold"
            >
              📦 View Product
            </a>
          </div>
        </div>

        <img src="/hero.png" className="w-[480px] rounded-xl shadow-xl" />
      </section>

      <Footer />
    </div>
  );
}
