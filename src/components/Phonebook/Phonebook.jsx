import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactAddForm from "../ContactAddForm/ContactAddForm"
import { ContactItemList } from "../ContactItemList/ContactItemList"
import { Filter } from "../Filter/Filter"
import { PhonebookStyled } from "./Phonebook.Styled"

export default function Phonebook() {
    const [contacts, setContacts] = useState(() => {
        const value = JSON.parse(localStorage.getItem("contacts"));
        return value ?? [];
    });
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    useEffect(() => {
        localStorage.removeItem("contacts");
    }, [])

    const handleChange = (event) => {
        const { value } = event.currentTarget;
        setFilter(value)
    }

    const addContact = (contact) => {
        if (inContacts(contact)) {
            return alert(`${contact.name} is already in contacts`);
        };

        setContacts((prev) => {
            const newContact = {
                id: nanoid(),
                ...contact
            }
            return [...prev, newContact]
        })
    };

    const removeContact = (id) => {
        setContacts((prev) => {
            const newContact = prev.filter(item => item.id !== id);
            return newContact
        })
    };

    const getFilteredContacts = () => {
        if (!filter) {
            return contacts;
        }

        const normalFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name }) => {
            const normalName = name.toLocaleLowerCase().includes(normalFilter);
            return normalName;
        })
        return filteredContacts;
    };

    const inContacts = ({name, number}) => {
        return contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase() || item.number === number);
    }

    const filteredContacts = getFilteredContacts();

    return <PhonebookStyled>
        <h1>Phonebook</h1>
        <ContactAddForm onSubmit={addContact}/>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleChange}/>
        <ContactItemList contacts={filteredContacts} onClick={removeContact}/>
    </PhonebookStyled>



}
