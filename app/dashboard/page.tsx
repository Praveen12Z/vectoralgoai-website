import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  const metrics = {
    totalReturn: "12.5%",
    winRate: "48%",
    profitFactor: "1.22",
    maxDrawdown: "-6.3%",
    trades: 187
  };

  return (
    <>
      <Navbar />

      <div className="px-10 py-10">
        <h1 className="text-3xl font-bold mb-6">📊 Strategy Dashboard</h1>

        {/* KPI CARDS */}
        <div className="grid grid-cols-5 gap-6">
          {Object.entries(metrics).map(([key, val]) => (
            <div key={key} className="bg-darkGray p-6 rounded-xl border border-gray-700">
              <h3 className="text-gray-400 capitalize">{key}</h3>
              <p className="text-3xl font-bold mt-3">{val}</p>
            </div>
          ))}
        </div>

        {/* MOCK CHART */}
        <div className="bg-darkGray h-[380px] mt-10 rounded-xl flex items-center justify-center border border-gray-700 text-gray-400">
          (Chart Placeholder — ML + Backtester Integration Goes Here)
        </div>
      </div>

      <Footer />
    </>
  );
}
