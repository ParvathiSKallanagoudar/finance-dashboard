const budgets = [
  { name: "Food", limit: 2000, spent: 1300 },
  { name: "Travel", limit: 1500, spent: 800 },
];

const BudgetTracker = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow border dark:border-gray-700 transition">

      <h3 className="font-semibold mb-4 text-gray-800 dark:text-white">
        Budget Tracker
      </h3>

      {budgets.map((b, i) => {
        const percent = (b.spent / b.limit) * 100;

        return (
          <div key={i} className="mb-4">

            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
              <span>{b.name}</span>
              <span>₹{b.spent} / ₹{b.limit}</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded mt-1">
              <div
                className={`h-2 rounded transition-all ${
                  percent > 80
                    ? "bg-red-500"
                    : percent > 50
                    ? "bg-yellow-500"
                    : "bg-blue-500"
                }`}
                style={{ width: `${percent}%` }}
              />
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default BudgetTracker;