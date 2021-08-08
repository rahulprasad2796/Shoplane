const initialState = {
    products : [],
    product: [],
    cart: [],
    border: null,
    preview: null
}

function productReducer(state = initialState, { type, payload }){
    switch (type) {

    case "GET_PRODUCTS":
        {return { ...state, products : payload }}
    case "GET_PRODUCT":
        {return { ...state, product : payload }}
    case "ADD_BORDER":
        {return {...state, border: payload }}
    case "ADD_PRODUCT-TO-CART":
        {return {...state, cart: [...state.cart, payload] }}
    case "ADD_PREVIEW":
        {return {...state, preview: payload }}
    case "CLEAR-CART":
        {return {...state, cart: payload }}
    case "REM_PREVIEW":
        {return {...state, preview: payload }}
    case "REM_BORDER":
        {return {...state, border: payload }}
    default:
        return state
    }
}

export default productReducer;