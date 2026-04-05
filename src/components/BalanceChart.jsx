import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Dec 2025", balance: 3500 },
  { name: "Jan", balance: 4000 },
  { name: "Feb", balance: 3000 },
  { name: "Mar", balance: 5000 },
  { name: "Apr", balance: 4000 },
];

const BalanceChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow border dark:border-gray-700 transition">
      <h3 className="mb-4 font-semibold text-gray-800 dark:text-white">
        Balance Trend
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          
          {/* ✅ FIXED HERE */}
          <XAxis dataKey="name" />

          <YAxis />
          <Tooltip />
          
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#4F46E5"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;