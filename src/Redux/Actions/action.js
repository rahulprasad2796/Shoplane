export const getProducts = (payload) => ({
    type: "GET_PRODUCTS",
    payload
})

export const getProduct = (payload) => ({
    type: "GET_PRODUCT",
    payload
})

export const addProductToCart = (payload) => ({
    type: "ADD_PRODUCT-TO-CART",
    payload
})

export const addImgBorder = (payload) => ({
    type: "ADD_BORDER",
    payload
})

export const remImgBorder = (payload) => ({
    type: "REM_BORDER",
    payload
})

export const addPreview = (payload) => ({
    type: "ADD_PREVIEW",
    payload
})


export const clearFinCart = (payload) => ({
    type: "CLEAR-CART",
    payload
})


export const remoPrev = (payload) => ({
    type: "REM_PREVIEW",
    payload
})