// pages/api/user.js
let users = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Alice Johnson", age: 35 },
  { id: 4, name: "Bob Brown", age: 40 },
  { id: 5, name: "Emily Wilson", age: 28 },
  { id: 6, name: "Michael Davis", age: 33 },
  { id: 7, name: "Sarah Thompson", age: 22 },
  // Add more sample users as needed
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Respond with the existing users data
    res.status(200).json({ users });
  } else if (req.method === "POST") {
    // Parse the incoming request body
    const { name, age } = req.body;

    // Generate a new user ID
    const id = users.length + 1;

    // Create a new user object
    const newUser = { id, name, age };

    // Add the new user to the users array
    users.push(newUser);

    // Respond with the newly added user
    res.status(201).json({ user: newUser });
  } else {
    // Handle unsupported HTTP methods
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
