import axios from "axios";
import { useState } from "react";
import "../App.css";

const CreateUsers = ({ onAddUser }) => {
  const [createName, setCreateName] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [createAddress, setCreateAddress] = useState('');
  const [createCity, setCreateCity] = useState('');
  const [createZipcode, setCreateZipcode] = useState('');
  const [createPhoneNo, setCreatePhoneNo] = useState('');
  const [createCompany, setCreateCompany] = useState('');
  const [createCompanybs, setCreateCompanybs] = useState('');

  const createbox = async (e) => {
    e.preventDefault(); // Prevent form submission

    const newUser = {
      name: createName,
      email: createEmail,
      streetaddress: createAddress,
      city: createCity,
      zipcode: createZipcode,
      phoneno: createPhoneNo,
      companyname: createCompany,
      companybs: createCompanybs
    };

    try {
      const response = await axios.post(
        `https://66670030a2f8516ff7a5dea2.mockapi.io/Users`,
        newUser
      );

      if (response && response.data) {
        const newUserWithId = response.data;
        onAddUser(newUserWithId);

        // Clear input fields
        setCreateName('');
        setCreateEmail('');
        setCreateAddress('');
        setCreateCity('');
        setCreateZipcode('');
        setCreatePhoneNo('');
        setCreateCompany('');
        setCreateCompanybs('');

        // Show success message
        alert('User created successfully!');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user. Please try again later.');
    }
  };

  return (
    <form onSubmit={createbox} className="form">
      <label>
        Name:
        <input
          type="text"
          value={createName}
          onChange={(e) => setCreateName(e.target.value)}
        />
      </label><br />
      <label>
        Email:
        <input
          type="text"
          value={createEmail}
          onChange={(e) => setCreateEmail(e.target.value)}
        />
      </label><br />
      <label>
        Streetaddress:
        <input
          type="text"
          value={createAddress}
          onChange={(e) => setCreateAddress(e.target.value)}
        />
      </label><br />
      <label>
        City:
        <input
          type="text"
          value={createCity}
          onChange={(e) => setCreateCity(e.target.value)}
        />
      </label><br />
      <label>
        Zipcode:
        <input
          type="text"
          value={createZipcode}
          onChange={(e) => setCreateZipcode(e.target.value)}
        />
      </label><br />
      <label>
        PhoneNo:
        <input
          type="text"
          value={createPhoneNo}
          onChange={(e) => setCreatePhoneNo(e.target.value)}
        />
      </label><br />
      <label>
        Companyname:
        <input
          type="text"
          value={createCompany}
          onChange={(e) => setCreateCompany(e.target.value)}
        />
      </label><br />
      <label>
        Companybs:
        <input
          type="text"
          value={createCompanybs}
          onChange={(e) => setCreateCompanybs(e.target.value)}
        />
      </label><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateUsers;