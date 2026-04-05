import { useState } from "react";

const TransactionTable = ({ role, transactions, setTransactions }) => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newTx, setNewTx] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  // FILTER + SORT
  const filteredData = transactions
    .filter((tx) => {
      return (
        (filter === "all" || tx.type === filter) &&
        tx.category.toLowerCase().includes(search.toLowerCase())
      );
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // VIEW LOGIC (4 or all)
  const displayedTransactions = showAll
    ? filteredData
    : filteredData.slice(0, 4);

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow mt-6 border dark:border-gray-700 transition">

      <h3 className="font-semibold mb-4 text-lg text-gray-800 dark:text-white">
        Transactions
      </h3>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search category..."
          className="border dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Add Button */}
      {role === "admin" && (
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Transaction
        </button>
      )}

      {/* Form */}
      {showForm && (
        <div className="mb-4 p-4 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

            <input
              type="date"
              className="border dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded"
              onChange={(e) => setNewTx({ ...newTx, date: e.target.value })}
            />

            <input
              type="text"
              placeholder="Category"
              className="border dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded"
              onChange={(e) => setNewTx({ ...newTx, category: e.target.value })}
            />

            <input
              type="number"
              placeholder="Amount"
              className="border dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded"
              onChange={(e) => setNewTx({ ...newTx, amount: e.target.value })}
            />

            <select
              className="border dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded"
              onChange={(e) => setNewTx({ ...newTx, type: e.target.value })}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          <button
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => {
              if (!newTx.date || !newTx.category || !newTx.amount) return;

              setTransactions([
                ...transactions,
                { ...newTx, id: Date.now() },
              ]);

              setShowForm(false);
              setNewTx({
                date: "",
                category: "",
                amount: "",
                type: "expense",
              });
            }}
          >
            Add
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead>
            <tr className="border-b text-gray-600 dark:text-gray-300">
              <th className="py-2">Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
              {role === "admin" && <th>Actions</th>}
            </tr>
          </thead>

          <tbody>
            {displayedTransactions.map((tx) => (
              <tr key={tx.id} className="border-b">
                <td className="py-2">{tx.date}</td>
                <td>{tx.category}</td>
                <td>₹{tx.amount}</td>
                <td className={tx.type === "income" ? "text-green-500" : "text-red-500"}>
                  {tx.type}
                </td>

                {role === "admin" && (
                  <td>
                    <button
                      className="text-red-500"
                      onClick={() =>
                        setTransactions(
                          transactions.filter((t) => t.id !== tx.id)
                        )
                      }
                    >
                      🗑️
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View All Button */}
      {filteredData.length > 4 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 dark:text-blue-400"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}

      {/* EMPTY STATE FIXED */}
      {displayedTransactions.length === 0 && (
        <p className="text-gray-500 text-center mt-4">
          No transactions found
        </p>
      )}
    </div>
  );
};

export default TransactionTable;