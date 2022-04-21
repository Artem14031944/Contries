import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin:0 auto;
  padding:0 2rem;
`;

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background: var(--color-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;


  
export const Header = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : "light");

  useEffect(()=> {
    document.body.setAttribute('data-theme', theme)
  }, [theme]);

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
          {theme === 'light' ?
            <IoMoonOutline size="14px"/>
          :
            <IoMoon size="14px"/>
          }
          <span style={{ marginLeft: '0.75rem'}}>{theme} Theme</span> 
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  )
};

