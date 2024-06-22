import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {theme, state, dispatch} = useGlobalStates();
  return (
    <main id={theme === 'dark' ? 'dark' : 'light'} >
      <div>
        {/* Aqui deberias renderizar las cards */}
        <h1>Dentist list</h1>
        <div className='card-grid'>
          {state.dentists.map((dentist) => (
            <Card item={dentist} key={dentist.id}>
              <button onClick={() => dispatch({ type: "ADD_DENTIST", payload: dentist})}>
                +
              </button>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home