import axios from "axios";
import { useState } from "react";
import "../pages/PutUsers.css";

const PutUsers = ({ user, onUpdateUser }) => {
  const [updatedName, setUpdatedName] = useState(user.name);
  const [updatedEmail, setUpdatedEmail] = useState(user.email);
  const [updatedAddress, setUpdatedAddress] = useState(user.streetaddress);
  const [updatedCity, setUpdatedCity] = useState(user.city);
  const [updatedZipcode, setUpdatedZipcode] = useState(user.zipcode);
  const [updatedPhoneNo, setUpdatedPhoneNo] = useState(user.phoneno);
  const [updatedCompany, setUpdatedCompany] = useState(user.companyname);
  const [updatedCompanybs, setUpdatedCompanybs] = useState(user.companybs);
  const [showForm, setShowForm] = useState(false);

  const updatedbox = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
      const updatedUser = {
        ...user,
        name: updatedName,
        email: updatedEmail,
        streetaddress: updatedAddress,
        city: updatedCity,
        zipcode: updatedZipcode,
        phoneno: updatedPhoneNo,
        companyname: updatedCompany,
        companybs: updatedCompanybs,
      };

      const response = await axios.put(
        `https://66670030a2f8516ff7a5dea2.mockapi.io/Users/${user.id}`,
        updatedUser
      );

      onUpdateUser && onUpdateUser(response.data);

      // Hide the form after successful submission
      setShowForm(false);
    } catch (error) {
      console.error(`Failed to update user: ${error}`);
    }
  };

  const handleNameChange = (event) => {
    setUpdatedName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUpdatedEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setUpdatedAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setUpdatedCity(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setUpdatedZipcode(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setUpdatedPhoneNo(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setUpdatedCompany(event.target.value);
  };

  const handleCompanybsChange = (event) => {
    setUpdatedCompanybs(event.target.value);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button onClick={toggleForm}className="update-button">Update</button>
      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <form onSubmit={updatedbox}>
              <label>
                Name:
                <input
                  type="text"
                  value={updatedName}
                  onChange={handleNameChange}
                />
              </label>
              <br/>
              <label>
                Email:
                <input
                  type="text"
                  value={updatedEmail}
                  onChange={handleEmailChange}
                />
              </label>
              <br/>
              <label>
                Streetaddress:
                <input
                  type="text"
                  value={updatedAddress}
                  onChange={handleAddressChange}
                />
              </label>
              <br/>
              <label>
                City:
                <input
                  type="text"
                  value={updatedCity}
                  onChange={handleCityChange}
                />
              </label>
              <br/>
              <label>
                Zipcode:
                <input
                  type="text"
                  value={updatedZipcode}
                  onChange={handleZipcodeChange}
                />
              </label>
              <br/>
              <label>
                PhoneNo:
                <input
                  type="text"
                  value={updatedPhoneNo}
                  onChange={handlePhoneNoChange}
                />
              </label>
              <br/>
              <label>
                Companyname:
                <input
                  type="text"
                  value={updatedCompany}
                  onChange={handleCompanyChange}
                />
              </label>
              <br/>
              <label>
                Companybs:
                <input
                  type="text"
                  value={updatedCompanybs}
                  onChange={handleCompanybsChange}
                />
              </label>
              <br/>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PutUsers;
