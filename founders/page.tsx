import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Founders() {
  return (
    <>
      <Navbar />

      <div className="px-20 py-20">
        <h1 className="text-4xl font-bold">Founders</h1>

        <div className="mt-10 space-y-10">

          <div>
            <h2 className="text-2xl font-bold">Praveen Kumar</h2>
            <p className="text-gray-400">
              Founder & Builder | AI + Quant | Vision behind VectorAlgoAI
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Sandhya Moni</h2>
            <p className="text-gray-400">
              Co-Founder & Strategy Lead | Product & Business
            </p>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
}
