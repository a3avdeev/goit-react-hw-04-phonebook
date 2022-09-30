import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import {ContactForm} from "./ContactAddForm.Styled"


export default class ContactAddForm extends Component {
    state = {
        name: '',
        number: '',
    }

    nameId = nanoid();
    numberId = nanoid();

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        console.log(this.state);
        this.props.onSubmit({name, number});
            this.setState({
                name: '',
                number: '',
            })
        
    }


    render() {
    return (
        <>
            <ContactForm onSubmit={this.handleSubmit}>
                <label htmlFor='{nameId}'>
                    Name
                </label>
                <input
                    id={this.nameId}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="Enter New Name"
                    required
                />
                <label htmlFor='{numberId}'>
                    Number
                </label>
                <input
                    id={this.numberId}
                    type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="Enter New Number"
                    required
                />
                <button type="submit">Add contact</button>
            </ContactForm>
        </>
    )
    }
}

ContactAddForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}