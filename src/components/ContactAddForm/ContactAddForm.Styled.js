import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;

  & label {
    margin-bottom: 10px;
    font-size: 1.1em;
  }

  & input {
    max-width: 300px;
    height: 30px;
    font-size: 1.1em;
    padding-left: 10px;
    margin-bottom: 10px;

    &:focus {
      outline: 2px solid #00bfff;
    }
  }

  & button {
    padding: 8px;
    max-width: 140px;
    font-size: 1.1em;
    border: 1px solid black;
    border-radius: 4px;

    &:hover,
    :focus {
      background-color: #00bfff;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;
