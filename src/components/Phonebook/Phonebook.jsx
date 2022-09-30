import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactAddForm from "../ContactAddForm/ContactAddForm"
import { ContactItemList } from "../ContactItemList/ContactItemList"
import { Filter } from "../Filter/Filter"
import { PhonebookStyled } from "./Phonebook.Styled"

export default class Phonebook extends Component {
    state = {
        contacts: [],
        filter: ''
    }

    componentDidMount() {
        const contacts = JSON.parse(localStorage.getItem("contacts"));
        if (contacts?.length) {
            this.setState({
                contacts,
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { contacts } = this.state;
        if (contacts !== prevState.contacts) {
            localStorage.setItem("contacts", JSON.stringify(contacts));
        }
    }

    componentWillUnmount() {
        if (this.state.contacts.length === 0) {
            localStorage.removeItem("contacts");
            console.log('componentWillUnmount');
        }
    }

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({[name]: value})
    }

    addContact = (contact) => {
        if (this.inContacts(contact)) {
            return alert(`${contact.name} is already in contacts`);
        }

        this.setState((prev) => {
            const newContact = {
                id: nanoid(),
                ...contact
            }
            return {
                contacts: [...prev.contacts, newContact]
            }
        })
    }

    removeContact = (id) => {
        this.setState((prev) => {
            const newContact = prev.contacts.filter(item => item.id !== id);
            return {contacts: newContact}
        })
    }

    getFilteredContacts() {
        const { contacts, filter } = this.state;

        if (!filter) {
            return contacts;
        }

        const normalFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name }) => {
            const normalName = name.toLocaleLowerCase().includes(normalFilter);
            return normalName;
        })
        return filteredContacts;
    }

    inContacts({name, number}) {
        return this.state.contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase() || item.number === number);
    }

    render() {
        const { filter } = this.state;
        const {addContact, removeContact, handleChange } = this;
        const contacts = this.getFilteredContacts();
        return <PhonebookStyled>
            <h1>Phonebook</h1>
            <ContactAddForm onSubmit={addContact}/>

            <h2>Contacts</h2>
            <Filter value={filter} onChange={handleChange}/>
            <ContactItemList contacts={contacts} onClick={removeContact}/>
        </PhonebookStyled>
    }



}
