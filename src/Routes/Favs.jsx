import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {theme, state, dispatch} = useGlobalStates();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid" id={theme === 'dark' ? 'dark' : 'light'}>
        {/* este componente debe consumir los destacados del localStorage */}
        {state.favs.map((dentist) => (
          <Card item={dentist} key={dentist.id}>
            <button onClick={() => dispatch({ type: "DELETE", payload: dentist})}>
              X
            </button>
          </Card>
        ))}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
