import React from 'react';
import styled from 'styled-components';


const WrapperMain = styled.main`
  padding: 2rem 0;

  @media(min-width: 767px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin:0 auto;
  padding:0 2rem;
`;

export const Main = ({children}) => {
  return (
    <WrapperMain>
      <Container>{children}</Container>
    </WrapperMain>
  )
};
