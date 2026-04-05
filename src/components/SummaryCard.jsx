const SummaryCard = ({ title, amount, color }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 p-5 rounded-2xl shadow mt-6 border dark:border-gray-700 transition">

      {/* background circle */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 dark:bg-gray-700 opacity-20 rounded-full translate-x-6 -translate-y-6"></div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <h2 className={`text-2xl font-bold ${color || "text-gray-900 dark:text-white"}`}>
        {amount}
      </h2>

    </div>
  );
};

export default SummaryCard;