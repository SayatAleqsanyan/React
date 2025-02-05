import axios from 'axios'

export async function addUser(data) {
  try {
    const response = await axios.post('http://localhost:4000/users', data)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

export async function getUsers() {
  try {
    const response = await axios.get('http://localhost:4000/users')
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

export async function deleteUser(id) {
  try {
    const response = await axios.delete(`http://localhost:4000/users/${id}`)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

export async function editUser(id, data) {
  try {
    const response = await axios.put(`http://localhost:4000/users/${id}`, data)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      state = [...state, action.payload]
      return state
    case 'GET_USERS':
      state = action.payload
      return state
    case 'DELETE_USER':
      state = state.filter(item => item.id !== action.payload)
      return state
    case 'EDIT_USER':
      state = state.map(item =>
        item.id === action.payload.id ? action.payload : item
      )
      return state
    default:
      return state
  }
}
