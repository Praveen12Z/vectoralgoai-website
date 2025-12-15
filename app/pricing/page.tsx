import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Pricing() {
  return (
    <>
      <Navbar />

      <div className="px-20 py-20">
        <h1 className="text-4xl font-bold">Pricing</h1>

        <div className="grid grid-cols-3 gap-10 mt-10">

          <div className="bg-darkGray p-10 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Starter</h2>
            <p className="text-4xl font-extrabold">€1</p>
            <p className="text-gray-400 mt-3">For beginners</p>
          </div>

          <div className="bg-blueAccent p-10 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-navy">Pro</h2>
            <p className="text-4xl font-extrabold text-navy">€29 / month</p>
          </div>

          <div className="bg-darkGray p-10 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Institutional</h2>
            <p className="text-4xl font-extrabold">Custom</p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
