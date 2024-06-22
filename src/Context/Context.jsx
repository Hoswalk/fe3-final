import { createContext, useContext, useState, useEffect, useReducer  } from "react";
import { reducer } from "../reducers/reducer";
import axios from "axios";

const GlobalStates = createContext();

    const initialState = {
        dentists: [],
        favs: [],
    };

const Context = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => curr === "light" ? "dark" : "light");
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        axios(url)
            .then((res) =>
                dispatch({ type: "GET_DENTIST", payload: res.data})
            )
            .catch((err) => console.log(err));
    }, []);

    return (
        <GlobalStates.Provider value={{theme, toggleTheme, state, dispatch}}>
            {children}
        </GlobalStates.Provider>
    )
};

export default Context;

export const useGlobalStates = () => {
    return useContext(GlobalStates);
}
