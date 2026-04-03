import { useState } from "react";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import SummaryCard from "./components/SummaryCard";
import BalanceChart from "./components/BalanceChart";
import CategoryChart from "./components/CategoryChart";
import TransactionTable from "./components/TransactionTable";
import Insights from "./components/Insights";

function App() {
  const [role, setRole] = useState("viewer");

  return (
    <div className="flex-1 bg-gray-100 min-h-screen ml-60">
      
      <Sidebar role={role} setRole={setRole} />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />

        {/* ✅ Everything inside ONE container */}
        <div className="p-6">

          <h1 className="text-2xl font-bold">
            Dashboard ({role})
          </h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <SummaryCard title="Total Balance" amount="₹52,300" color="text-black" />
            <SummaryCard title="Income" amount="₹80,000" color="text-green-500" />
            <SummaryCard title="Expenses" amount="₹27,700" color="text-red-500" />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <BalanceChart />
            <CategoryChart />
          </div>

          <TransactionTable role={role} />

          <Insights />
        </div>
      </div>
    </div>
  );
}

export default App;