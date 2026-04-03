const Sidebar = ({ role, setRole }) => {
  return (
    <div className="w-60 fixed top-0 left-0 h-screen bg-gray-900 text-white flex flex-col justify-between p-4">
      
      {/* Top */}
      <div>
        <h1 className="text-xl font-bold mb-6">💰 Finance</h1>

        <ul className="space-y-4">
          <li className="cursor-pointer hover:bg-gray-800 p-2 rounded">Dashboard</li>
          <li className="cursor-pointer hover:bg-gray-800 p-2 rounded">Transactions</li>
          <li className="cursor-pointer hover:bg-gray-800 p-2 rounded">Insights</li>
        </ul>
      </div>

      {/* Bottom */}
      <div>
        <p className="text-sm text-gray-300">Role</p>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mt-2 p-2 rounded bg-gray-800 text-white border border-gray-600"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;