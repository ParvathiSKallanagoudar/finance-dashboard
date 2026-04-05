const goals = [
  { name: "Trip", current: 5000, target: 10000 },
  { name: "Emergency Fund", current: 8000, target: 15000 },
];

const SavingsGoals = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow border dark:border-gray-700 transition">

      <h3 className="font-semibold mb-4 text-gray-800 dark:text-white">
        Savings Goals
      </h3>

      {goals.map((g, i) => {
        const percent = (g.current / g.target) * 100;

        return (
          <div key={i} className="mb-4">

            <p className="text-sm text-gray-700 dark:text-gray-300">
              {g.name}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              ₹{g.current} / ₹{g.target}
            </p>

            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded mt-1">
              <div
                className="h-2 rounded bg-green-500 transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default SavingsGoals;