export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_DENTIST":
            return {...state, dentists: action.payload}
        case "ADD_DENTIST":
            return {...state, favs: [...state.favs, action.payload]} 
        case "DELETE": 
            const filteredDentist = state.favs.filter(
                (item) => item.id !== action.payload.id
              );
              return { ...state, favs: filteredDentist };
            default:
              throw new Error();
    }
}