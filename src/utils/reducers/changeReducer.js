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



export  const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COURCE':
            state = [...state, action.payload]
            return state
        case 'GET_COURCE':
            state = action.payload
            return action.payload
        case 'DELETE_COURCE':
            state = state.filter(item => item.id !== action.payload)
            return state
        default:
            return state

    }
}
