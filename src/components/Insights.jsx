const Insights = ({ transactions }) => {
  const expenses = transactions.filter(t => t.type === "expense");

  const categoryMap = {};
  expenses.forEach(tx => {
    categoryMap[tx.category] =
      (categoryMap[tx.category] || 0) + Number(tx.amount);
  });

  const highestCategory =
    Object.keys(categoryMap).length > 0
      ? Object.keys(categoryMap).reduce((a, b) =>
          categoryMap[a] > categoryMap[b] ? a : b
        )
      : "N/A";

  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  let observation = "";
  if (totalExpense > totalIncome) {
    observation = "Expenses are higher than income ⚠️";
  } else if (totalIncome > totalExpense) {
    observation = "You are saving money 💰";
  } else {
    observation = "Income and expenses are balanced ⚖️";
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow mt-6 border dark:border-gray-700 transition">

      <h3 className="font-semibold mb-4 text-gray-800 dark:text-white">
        Insights
      </h3>

      <div className="space-y-3 text-gray-700 dark:text-gray-300">
        <p>💡 Highest spending category: <strong>{highestCategory}</strong></p>
        <p>📉 Total Expenses: <strong>₹{totalExpense}</strong></p>
        <p>📊 Total Income: <strong>₹{totalIncome}</strong></p>
        <p>🧠 {observation}</p>
      </div>

    </div>
  );
};

export default Insights;