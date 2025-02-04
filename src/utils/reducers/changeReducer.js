import axios from "axios";

export async function addCource(data){
    try {
        const response = await axios.post('http://localhost:4000/cources', data)
        return response.data
    }catch (error) {
        console.log(error.message)
    }
}

export async function getCources(){
    try {
        const response = await axios.get('http://localhost:4000/cources')
        return response.data
    }catch (error) {
        console.log(error.message)
    }
}

export async function deleteCource(id){
    try {
        const response = await axios.delete(`http://localhost:4000/cources/${id}`)
        return response.data
    }catch (error) {
        console.log(error.message)
    }
}

export async function editCource(id, data) {
    try {
        const response = await axios.put(`http://localhost:4000/cources/${id}`, data)
        return response.data
    }catch (error) {
        console.log(error.message)
    }
}

export  const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COURCE':
            state = [...state, action.payload]
            return state
        case 'GET_COURCE':
            state = action.payload
            return state
        case 'DELETE_COURCE':
            state = state.filter(item => item.id !== action.payload)
            return state
        case 'EDIT_COURCE':
            state = state.map(item => item.id === action.payload.id ? action.payload : item)
            return state
        default:
            return state
    }
}
