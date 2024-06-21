import axios from "axios";
import { useLoaderData } from "react-router-dom";
import "../App.css";
import PutUsers from "./PutUsers";
import { useState } from "react";
import CreateUsers from "./CreateUsers";
import DeleteUser from "./DeleteUser";

export const loader = async () => {
  const users = await axios.get(`https://66670030a2f8516ff7a5dea2.mockapi.io/Users`);
  return { users: users.data };
};

const Users = () => {
  const { users: initialUsers } = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
    setIsFormVisible(false);
  };

  const handleUpdateUsers = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const handleDeleteUser = (deletedUserId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== deletedUserId));
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
     <div >
      <nav className="navbar">
        <h1 className="align">Users Card</h1>
        <button onClick={toggleFormVisibility}>
          {isFormVisible ? "Hide Form" : "Create"}
        </button>
      </nav>
     
      <div className="card-container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.streetaddress}, {user.city}, {user.zipcode}</p>
            <p>PhoneNo: {user.phoneno}</p>
            <p>Companyname: {user.companyname} </p>
            <p>Companybs: {user.companybs} </p>
            <PutUsers
              user={user}
              key={user.id}
              onUpdateUser={handleUpdateUsers}
            />
            
            <DeleteUser userId={user.id} onDeleteUser={handleDeleteUser} />
         
          </div>
        ))}
      </div>
      {isFormVisible && (
        <div className="form-container">
          <CreateUsers onAddUser={handleAddUser} />
        </div>
      )}
    </div>
    
  );
};

export default Users;