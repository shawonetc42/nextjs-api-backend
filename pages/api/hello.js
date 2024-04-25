export default function handler(req, res) {
  // Sample data
  const users = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
  ];

  // Respond with the data
  res.status(200).json({ users });
}
