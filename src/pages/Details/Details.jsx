import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../../config';
import { Button } from '../../components/Button/Button';
import { Info } from '../../components/Info/Info';
import axios from 'axios';


export const Details = () => {

  const {name} = useParams();
  const {push, goBack} = useHistory();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name))
    .then(({data}) => setCountry(data[0]))
    .catch(err => console.log(err))
  }, [name]);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack/> Back
      </Button>
      {country && <Info push={push} {...country} />}
    </div>
  )
};

