import { useState, useEffect } from "react";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to add a new user
    fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data.user]); // Update the users state with the newly added user
        setName(""); // Clear the name input field
        setAge(""); // Clear the age input field
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex mb-4">
          <label className="mr-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2"
          />
        </div>
        <div className="flex mb-4">
          <label className="mr-2">Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-gray-300 p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
