import React, { useReducer, useEffect } from "react";
import storeReducer, { initialState, types } from "./StoreReducer";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    
    const persistedState = JSON.parse(localStorage.getItem("store")) || initialState;

    const [state, dispatch] = useReducer(storeReducer, persistedState);

    useEffect(() => {
        localStorage.setItem("store", JSON.stringify(state));
    }, [state]);

    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreContext };
export default StoreProvider;