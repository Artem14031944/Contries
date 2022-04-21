import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';


export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provide) => ({
      ...provide,
      background: 'var(--color-ui-base)',
      color: 'var(--color-text)',
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provide, state) => ({
      ...provide,
      cursor: 'pointer',
      color: 'var(--color-text)',
      background: state.isSelected ?  'var(--color-ui-base)' : 'var(--color-bg)',
    }),
  }
})`
  width: 250px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--color-text) !important;
  }

  & div[id] {
    background-color: var(--color-ui-base);
  }
`;
