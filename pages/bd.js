import React, { useState, useEffect } from "react";

function Test() {
  // State to store the fetched user data
  const [userData, setUserData] = useState(null);
  // State to track loading state
  const [loading, setLoading] = useState(true);
  // State to track error state
  const [error, setError] = useState(null);

  // Function to fetch user data from the API
  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/user", {
        headers: {
          Authorization: `Basic ${btoa("john:password123")}`, // Replace with actual username and password
        },
      });
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {/* Display loading message while data is being fetched */}
      {loading && <p>Loading...</p>}
      {/* Display error message if an error occurs */}
      {error && <p>Error: {error}</p>}
      {/* Display user data if available */}
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Age: {userData.age}</p>
          {/* Add more user data properties as needed */}
        </div>
      )}
    </div>
  );
}

export default Test;
