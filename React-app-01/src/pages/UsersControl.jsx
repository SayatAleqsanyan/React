import React, { useState, useEffect } from 'react';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    const reassignIds = (users) => {
        return users.map((user, index) => ({
            ...user,
            id: index + 1,
        }));
    };

    const deleteUser = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        const reindexedUsers = reassignIds(updatedUsers);
        localStorage.setItem("users", JSON.stringify(reindexedUsers));
        setUsers(reindexedUsers);
    };

    return (
        <div className="flex justify-center p-10 ">
            <table className="min-w-full bg-white border border-gray-200 text-center">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">No</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Password</th>
                        <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{user.id}</td>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.password}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    className="text-red-600 hover:text-red-800"
                                    onClick={() => {
                                        if (user.name === "Sayat1111") {
                                            alert("You can't delete this user!");
                                        } else {
                                            deleteUser(user.id);
                                        }
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;
