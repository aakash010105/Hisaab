import React, { useState } from "react";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [users, setUsers] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAddGroup = (e) => {
    e.preventDefault();

    if (!groupName.trim() || !users.trim()) {
      alert("Please provide both group name and users.");
      return;
    }

    const usersArray = users.split(",").map((user) => user.trim());
    const newGroup = { name: groupName, users: usersArray };

    setGroups([...groups, newGroup]);
    setGroupName("");
    setUsers("");
    setShowForm(false); // Close form after adding
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Groups</h1>

        {/* Groups List */}
        <div>
          {groups.length === 0 ? (
            <p className="text-center text-gray-600">No groups added yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groups.map((group, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-md">
                  <h3 className="text-lg font-bold mb-2">{group.name}</h3>
                  <p className="text-gray-700">
                    <strong>Users:</strong> {group.users.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Group Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        {showForm ? "Close" : "Add Group"}
      </button>

      {/* Add Group Form (Visible Only When `showForm` is True) */}
      {showForm && (
        <div className="fixed bottom-16 left-4 bg-white p-6 rounded shadow-md w-64">
          <h2 className="text-xl font-bold mb-4">Add New Group</h2>
          <form onSubmit={handleAddGroup}>
            <input
              type="text"
              placeholder="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Users (comma-separated)"
              value={users}
              onChange={(e) => setUsers(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Add Group
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Groups;
