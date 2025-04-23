
const types = {
    SET_USER: 'SET_USER'
};

const initialState = {
    user: { name: "f"},
    id: null
};

const storeReducer = (state, action) => {
    switch (action.type) {
        case types.SET_USER:
        return {
            ...state,
            user: action.payload
        };
        default:
        return state;
    }
    }

    export default storeReducer;
    export { initialState, types };