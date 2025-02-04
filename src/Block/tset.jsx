import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";

// Initial state
const initialState = {
  users: [],
  loading: false,
  error: null,
  selectedUser: null,
};

// Action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";
const BLOCK_USER = "BLOCK_USER";

// Reducer function
function userReducer(state, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };
    case FETCH_USERS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case BLOCK_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload
            ? { ...user, isBlocked: !user.isBlocked }
            : user
        ),
      };
    default:
      return state;
  }
}

function UserManagement() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Նոր վիճակ ձեռքով մուտքագրման համար
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
    isBlocked: false,
  });

  // Fetch users
  const fetchUsers = async () => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await axios.get("http://localhost:4000/users");
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: error.message,
      });
    }
  };

  // Add user
  const addUser = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/users",
        userData
      );
      dispatch({
        type: ADD_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Update user
  const updateUser = async (userId, userData) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/users/${userId}`,
        userData
      );
      dispatch({
        type: UPDATE_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Delete user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/users/${userId}`);
      dispatch({
        type: DELETE_USER,
        payload: userId,
      });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Block/Unblock user
  const toggleUserBlock = async (userId) => {
    try {
      const user = state.users.find((u) => u.id === userId);
      const updatedUser = { ...user, isBlocked: !user.isBlocked };

      await axios.put(`http://localhost:4000/users/${userId}`, updatedUser);
      dispatch({
        type: BLOCK_USER,
        payload: userId,
      });
    } catch (error) {
      console.error("Error blocking/unblocking user:", error);
    }
  };

  // Input-ների փոփոխման հենարան
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Ձեռքով նոր օգտատիրոջ ավելացում
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/users", newUser);
      dispatch({
        type: ADD_USER,
        payload: response.data,
      });

      // Ջնջում է ներածված տվյալները
      setNewUser({
        userName: "",
        email: "",
        password: "",
        isBlocked: false,
      });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}

      <ul>
        {state.users.map((user) => (
          <li key={user.id}>
            {user.userName}
            <button
              onClick={() =>
                updateUser(user.id, { ...user, userName: "Updated Name" })
              }
            >
              Update
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => toggleUserBlock(user.id)}>
              {user.isBlocked ? "Unblock" : "Block"}
            </button>
          </li>
        ))}
      </ul>

      {/* Նոր օգտատիրոջ ձեռքով ավելացման ֆորմա */}
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={newUser.userName}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newUser.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserManagement;
