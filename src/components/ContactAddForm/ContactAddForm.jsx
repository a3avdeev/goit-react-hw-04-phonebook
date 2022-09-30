import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import {ContactForm} from "./ContactAddForm.Styled"


export default function ContactAddForm({onSubmit}) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameId = nanoid();
    const numberId = nanoid();

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                setName('');
                setNumber('');
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, number });
        setName('');
        setNumber('');
    };


    return (
        <>
            <ContactForm onSubmit={handleSubmit}>
                <label htmlFor='{nameId}'>
                    Name
                </label>
                <input
                    id={nameId}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="Enter New Name"
                    required
                />
                <label htmlFor='{numberId}'>
                    Number
                </label>
                <input
                    id={numberId}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="Enter New Number"
                    required
                />
                <button type="submit">Add contact</button>
            </ContactForm>
        </>
    )
};

ContactAddForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}