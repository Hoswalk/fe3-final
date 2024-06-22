import React, { useState } from "react";
import { useGlobalStates } from "../Context/Context";
import Sent from "./Sent";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const {theme} = useGlobalStates();
  const [client, setClient] = useState({
    name: '',
    email: ''
});

const [show, setShow] = useState(false);
const [error, setError] = useState(false);

const emailVerification = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

const handleName = (event) => setClient({...client, name: event.target.value})

const handleEmail = (event) => {setClient({...client, email: event.target.value})}

const handleSubmit = (event) => {
    event.preventDefault();
    if(client.name.length >= 5 && emailVerification.test(client.email)) //and add email
    {
        setShow(true)
        setError(false)
    } else{
        setError(true)
        setShow(false)
    }
}

console.log(client)
return (
<div className="main" id={theme}>
    {show ? (<Sent client={client} />) : (
        <form onSubmit={handleSubmit} >
            {/* <label>Full name:</label>
            <input type='text' value={client.name} onChange={handleName}></input>
            <label>Language:</label>
            <input type='text' value={client.languageName} onChange={handleLanguage} />
            <button>Send!</button> */}
            <input className="un " type="text" align="center" value={client.name} 
            onChange={handleName} placeholder="Full name"></input>

            <input className="un " type="email" align="center" value={client.email} 
            onChange={handleEmail} placeholder="Email"></input>
            
            <button className="submit" align="center">Send</button>
            <p className="forgot" align="center"><a href="#">Any doubts please call 77634562</a></p>
        </form>
    )}{error && (
        <p style={{color: "red"}}>Please, check the information and try again.</p>
    )}
    
</div>
)
}

export default Form;
