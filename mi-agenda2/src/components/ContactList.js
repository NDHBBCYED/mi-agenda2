import React from 'react';

const ContactList = ({ contacts }) => {
 return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} {contact.surname} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
 );
};

export default ContactList;