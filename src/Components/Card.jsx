import React from "react";
import { Link } from "react-router-dom";


const Card = ({ item, children }) => {

const {name, username} = item

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  return (
    <div className="card">
      <Link to={"/detail/" + item.id}>
        <img className="img" src="./images/doctor.jpg" alt="" />
        <h4>{item.id}</h4>
        <h4>{name}</h4>
        <h4>{username}</h4>
      </Link>
        //{/* En cada card deberan mostrar en name - username y el id */}
          
        //{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}


        //{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
        {children}
    </div>
  );
};

export default Card;
