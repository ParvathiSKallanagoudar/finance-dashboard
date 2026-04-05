const Topbar = ({ dark, setDark }) => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 px-6 py-3 shadow">
      <h2 className="text-lg font-semibold text-gray-700">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">

        {/* 🌙 Dark Mode Button */}
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Profile Icon */}
        <div className="text-xl cursor-pointer">
          👤
        </div>

      </div>
    </div>
  );
};

export default Topbar;