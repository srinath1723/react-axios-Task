import axios from "axios";
import { useState } from "react";
import "../pages/PutUsers.css";
const DeleteUser = ({ userId, onDeleteUser }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(
        `https://66670030a2f8516ff7a5dea2.mockapi.io/Users/${userId}`
      );
      onDeleteUser(userId); // Notify parent component about the deletion
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}className="update-button" disabled={loading}>
        {loading ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default DeleteUser;
