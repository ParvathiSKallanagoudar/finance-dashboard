import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const CategoryChart = ({ transactions }) => {
  const categoryData = {};

  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + Number(t.amount);
    });

  const data = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  const COLORS = ["#3b82f6", "#ef4444", "#f59e0b", "#10b981"];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white p-5 rounded-xl shadow border">
      <h3 className="font-semibold mb-4">Spending Breakdown</h3>

      <div className="relative flex justify-center items-center">
        <PieChart width={300} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>

        {/* Center Text */}
        <div className="absolute text-center">
          <p className="text-lg font-bold">₹{total}</p>
          <p className="text-xs text-gray-500">spent</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryChart;