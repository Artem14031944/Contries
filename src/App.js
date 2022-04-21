import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Details } from './pages/Details/Details.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import './index.css';


const App = () => {

  const [countries, setCountries] = useState([]);

  return (
    <>
     <Header/>
     <Main>
     <Switch>
       <Route exact path="/">
         <HomePage countries={countries} setCountries={setCountries}/>
       </Route>
       <Route path="/country/:name" component={Details}/>
       <Route component={NotFound}/>
     </Switch>
     </Main>
    </>
  );
};

export default App;
