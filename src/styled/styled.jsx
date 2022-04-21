import styled from 'styled-components';


export const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;


  @media(min-width: 767px) {
    width: 280px;
    margin-bottom: 0rem;
  }
`;

export const InputSearch = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...'
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--color-text);
`;


