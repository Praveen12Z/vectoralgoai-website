import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Product() {
  return (
    <>
      <Navbar />

      <div className="px-20 py-20">
        <h1 className="text-4xl font-bold">What makes VectorAlgoAI different?</h1>

        <ul className="mt-10 space-y-4 text-gray-300">
          <li>✔ We don’t predict price blindly</li>
          <li>✔ We stress-test strategies properly</li>
          <li>✔ We explain WHY your edge fails</li>
          <li>✔ We prepare traders for prop-firm reality</li>
        </ul>

        <h2 className="text-3xl font-bold mt-16">Machine Learning (Next Phase)</h2>
        <ul className="mt-5 space-y-3 text-gray-400">
          <li>• Per-instrument ML models</li>
          <li>• Confidence scoring</li>
          <li>• XAI explanations for every decision</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}
