import styled from 'styled-components';

export const ContactList = styled.ul`
  padding: 0;
  list-style: none;

  & li {
    display: flex;
    align-items: center;
    max-width: 420px;
    padding-left: 10px;

    &:focus,
    &:hover {
      color: red;
      cursor: pointer;
    }

    & svg {
      width: 30px;
      height: 30px;
    }

    & p {
      width: 300px;
      font-size: 1.2em;
      margin: 10px;
    }

    & button {
      padding: 4px;
      font-size: 1.1em;
      border: 1px solid black;
      border-radius: 4px;

      &:hover,
      :focus {
        background-color: #dc143c;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
`;
