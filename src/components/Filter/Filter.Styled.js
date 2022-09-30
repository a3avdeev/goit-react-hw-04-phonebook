import styled from 'styled-components';

export const FilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  & label {
    margin-bottom: 20px;
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
`;
