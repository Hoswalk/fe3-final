import React, { useEffect } from 'react'
import { useGlobalStates } from '../Context/Context';
import { useParams } from 'react-router-dom';
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {theme, state, dispatch} = useGlobalStates();
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) => dispatch({ type: "GET_DENTIST", payload: res.data}))
  }, [dispatch, url])

  const dentist = state.dentists;

  return (
    <div id={theme === 'dark' ? 'dark' : 'light'}>
      <h1>Detail Dentist id: {params.id}</h1>
      {/* Render detailed information of a specific user */}
      {dentist ? (
        <>
          <h2>{dentist.name}</h2>
          <h2>{dentist.username}</h2>
          <h2>{dentist.phone}</h2>
          <h2>{dentist.email}</h2>
          <h2>{dentist.website}</h2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Detail