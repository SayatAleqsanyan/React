import React, { useState, useEffect } from 'react'
import { notify } from '../../utils/notify'
import axios from 'axios'

const getUsers = async () => {
  try {
    const response = await axios.get('http://localhost:4000/users')
    return response.data
  } catch (error) {
    console.log(error.message)
    return []
  }
}

const UsersList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const storedUsers = null
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers))
    } else {
      const fetchUsers = async () => {
        const allUsers = await getUsers()
        setUsers(allUsers)
      }
      fetchUsers()
    }
  }, [])

  const reassignIds = users => {
    return users.map((user, index) => ({
      ...user,
      id: index + 1,
    }))
  }

  const blockUser = id => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, isBlocked: !user.isBlocked } : user
    )
    const reindexedUsers = reassignIds(updatedUsers)
    setUsers(reindexedUsers)
  }

  const deleteUser = id => {
    const updatedUsers = users.filter(user => user.id !== id)
    const reindexedUsers = reassignIds(updatedUsers)
    setUsers(reindexedUsers)
  }

  return (
    <div className='flex justify-center p-10 '>
      <table className='min-w-full bg-white border border-gray-200 text-center'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b '>No</th>
            <th className='py-2 px-4 border-b'>Name</th>
            <th className='py-2 px-4 border-b'>Email</th>
            <th className='py-2 px-4 border-b'>Password</th>
            <th className='py-2 px-4 border-b'>Blocked</th>
            <th className='py-2 px-4 border-b'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className='hover:bg-gray-100'>
              <td className='py-2 px-4 border-b'>{user.id}</td>
              <td className='py-2 px-4 border-b'>{user.userName}</td>
              <td className='py-2 px-4 border-b'>{user.email}</td>
              <td className='py-2 px-4 border-b'>{user.password}</td>
              {user.userName !== 'Admin' && (
                <td className='py-2 px-4 border-b'>
                  <button
                    className={
                      !user.isBlocked
                        ? 'text-green-600 hover:text-green-800'
                        : 'text-red-600 hover:text-red-800 w-[75px]'
                    }
                    onClick={() => {
                      if (user.userName === 'Admin') {
                        notify("You can't Blocked this user!", 'blue')
                      } else {
                        !user.isBlocked
                          ? notify(`User unblocked ${user.userName}!`, 'green')
                          : notify(`User blocked ${user.userName}!`, 'red')
                        blockUser(user.id)
                      }
                    }}
                  >
                    {user.isBlocked ? 'Blocking' : 'Unblocking'}
                  </button>
                </td>
              )}
              {user.userName !== 'Admin' && (
                <td className='py-2 px-4 border-b'>
                  <button
                    className='text-red-600 hover:text-red-800 w-[75px]'
                    onClick={() => {
                      if (user.userName === 'Admin') {
                        notify("You can't delete this user!", 'blue')
                      } else {
                        notify(`User deleted ${user.userName}!`, 'red')
                        deleteUser(user.id)
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
