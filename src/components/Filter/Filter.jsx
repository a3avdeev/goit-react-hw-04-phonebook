import React from 'react';
import PropTypes from "prop-types";
import {FilterStyled} from "./Filter.Styled"

export const Filter = ({ filter, onChange }) => {
    return (
        <FilterStyled>
            <label htmlFor='filterId'>Find contacts by name</label>
            <input id="filterId" type="text" name="filter" value={filter}  onChange={onChange} placeholder="input something"/>
        </FilterStyled>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}