const Insights = () => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow mt-6">
      <h3 className="font-semibold mb-4">Insights</h3>

      <div className="space-y-3">
        <p>💡 Highest spending category: <strong>Food</strong></p>
        <p>📉 Expenses decreased by <strong>12%</strong> from last month</p>
        <p>📊 Income remains stable this month</p>
      </div>
    </div>
  );
};

export default Insights;