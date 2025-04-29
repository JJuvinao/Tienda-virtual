import { createContext, useReducer, useEffect } from "react";
import storeReducer, { initialState } from "./StoreReducer";

const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const persistedState = JSON.parse(localStorage.getItem("store")) || initialState;

    const [store, dispatch] = useReducer(storeReducer, persistedState);

    useEffect(() => {
        localStorage.setItem("store", JSON.stringify(store));
    }, [store]);

    return (
        <StoreContext.Provider value={[store, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreContext };
export default StoreProvider;