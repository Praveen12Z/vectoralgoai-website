import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="px-20 py-20">
        <h1 className="text-4xl font-bold">About VectorAlgoAI</h1>

        <p className="mt-6 text-gray-300 leading-relaxed">
          VectorAlgoAI is the world’s first AI-powered strategy crash-test lab
          for retail + prop traders.  
          We turn trader ideas into structured configs → stress-test them →
          show weaknesses → generate improvements.
        </p>
      </div>

      <Footer />
    </>
  );
}
