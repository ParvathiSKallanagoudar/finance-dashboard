const SummaryCard = ({ title, amount, color }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className={`text-2xl font-bold mt-2 ${color}`}>{amount}</p>
    </div>
  );
};

export default SummaryCard;