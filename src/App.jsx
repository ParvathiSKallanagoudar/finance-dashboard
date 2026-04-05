import { useState } from "react";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import SummaryCard from "./components/SummaryCard";
import BalanceChart from "./components/BalanceChart";
import CategoryChart from "./components/CategoryChart";
import TransactionTable from "./components/TransactionTable";
import Insights from "./components/Insights";
import BudgetTracker from "./components/BudgetTracker";
import SavingsGoals from "./components/SavingsGoals";

function App() {
  const [role, setRole] = useState("viewer");
  const [dark, setDark] = useState(false);

  const [transactions, setTransactions] = useState([
  { id: 1, date: "2026-04-01", category: "Food", amount: 500, type: "expense" },
  { id: 2, date: "2026-04-02", category: "Salary", amount: 25000, type: "income" },
  { id: 3, date: "2026-04-03", category: "Travel", amount: 800, type: "expense" },
  { id: 4, date: "2026-04-04", category: "Shopping", amount: 1200, type: "expense" },
  { id: 5, date: "2026-04-05", category: "Food", amount: 700, type: "expense" },
  { id: 6, date: "2026-04-06", category: "Salary", amount: 15000, type: "income" },
  { id: 7, date: "2026-04-07", category: "Travel", amount: 900, type: "expense" },
  { id: 8, date: "2026-04-08", category: "Bills", amount: 2000, type: "expense" },
  { id: 9, date: "2026-04-09", category: "Food", amount: 400, type: "expense" },
  { id: 10, date: "2026-04-10", category: "Shopping", amount: 1800, type: "expense" },
  { id: 11, date: "2026-04-11", category: "Salary", amount: 20000, type: "income" },
]);
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expenses;

  return (
    <div className={`flex ${dark ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
      
      <Sidebar role={role} setRole={setRole} />

      <div className="flex-1 min-h-screen ml-60 transition">

        <Topbar dark={dark} setDark={setDark} />

        <div className="p-6">

          <h1 className="text-2xl font-bold">
            Dashboard ({role})
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <SummaryCard title="Total Balance" amount={`₹${balance}`} />
            <SummaryCard title="Income" amount={`₹${income}`} />
            <SummaryCard title="Expenses" amount={`₹${expenses}`} />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <BalanceChart />
            <CategoryChart transactions={transactions} />
          </div>

          <TransactionTable
            role={role}
            transactions={transactions}
            setTransactions={setTransactions}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <BudgetTracker />
            <SavingsGoals />
          </div>

          <Insights transactions={transactions} />

        </div>
      </div>
    </div>
  );
}

export default App;