import axios from "axios";

export async function addProduct(data){
    try {
        const response = await axios.post('http://localhost:4000/products', data)
        return response.data
    }catch (error) {
        console.log(error.message)
    }
}

export async function getProducts(){
    try {
        const response = await axios.get('http://localhost:4000/products')
        return response.data
    }catch (error) {
        console.log(error.message)
    }
}

export async function deleteProduct(id){
    try {
        const response = await axios.delete(`http://localhost:4000/products/${id}`)
        return response.data
    }catch (error) {
        console.log(error.message)
    }
}

export async function editProduct(id, data) {
    try {
        const response = await axios.put(`http://localhost:4000/products/${id}`, data)
        return response.data
    }catch (error) {
        console.log(error.message)
    }
}

export  const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            state = [...state, action.payload]
            return state
        case 'GET_PRODUCTS':
            state = action.payload
            return state
        case 'DELETE_PRODUCT':
            state = state.filter(item => item.id !== action.payload)
            return state
        case 'EDIT_PRODUCT':
            state = state.map(item => item.id === action.payload.id ? action.payload : item)
            return state
        default:
            return state
    }
}
