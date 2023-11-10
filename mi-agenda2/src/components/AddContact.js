import React from 'react';

const AddContact = ({ addContact, name, setName, surname, setSurname, phone, setPhone }) => {
 return (
    <div>
      <h2>Add Contact</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Surname:
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <button onClick={addContact}>Add Contact</button>
    </div>
 );
};

export default AddContact;