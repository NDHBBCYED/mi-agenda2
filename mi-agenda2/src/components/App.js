import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
 const [contacts, setContacts] = useState([]);
 const [name, setName] = useState('');
 const [surname, setSurname] = useState('');
 const [phone, setPhone] = useState('');

 useEffect(() => {
    fetchContacts();
 }, []);

 const fetchContacts = async () => {
    try {
      const response = await axios.get('http://www.raydelto.org/agenda.php');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
 };

 const addContact = async () => {
    try {
      const newContact = { name, surname, phone };
      const response = await axios.post('http://www.raydelto.org/agenda.php', newContact);
      setContacts([...contacts, response.data]);
      setName('');
      setSurname('');
      setPhone('');
    } catch (error) {
      console.error('Error adding contact:', error);
    }
 };

 return (
    <div className="App">
      <ContactList contacts={contacts} />
      <AddContact addContact={addContact} name={name} setName={setName} surname={surname} setSurname={setSurname} phone={phone} setPhone={setPhone} />
    </div>
 );
}

export default App;