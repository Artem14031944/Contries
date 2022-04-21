import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { InputContainer, InputSearch } from '../../styled/styled';


export const Search = ({search, setSearch}) => {
  return (
    <InputContainer>
      <IoSearch/>
      <InputSearch 
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </InputContainer>
  )
};

