import { useState } from "react";

const initialData = [
  { id: 1, date: "2026-04-01", category: "Food", amount: 500, type: "expense" },
  { id: 2, date: "2026-04-02", category: "Salary", amount: 5000, type: "income" },
  { id: 3, date: "2026-04-03", category: "Travel", amount: 800, type: "expense" },
];

const TransactionTable = ({ role }) => {
  const [transactions, setTransactions] = useState(initialData);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredData = transactions.filter((tx) => {
    return (
      (filter === "all" || tx.type === filter) &&
      tx.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="bg-white p-5 rounded-2xl shadow mt-6">
      <h3 className="font-semibold mb-4">Transactions</h3>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search category..."
          className="border p-2 rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((tx) => (
            <tr key={tx.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{tx.date}</td>
              <td>{tx.category}</td>
              <td>₹{tx.amount}</td>
              <td
                className={
                  tx.type === "income" ? "text-green-500" : "text-red-500"
                }
              >
                {tx.type}
              </td>

              {role === "admin" && (
                <td>
                  <button className="mr-2">✏️</button>
                  <button>🗑️</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;