import React, { useEffect, useReducer, useState } from 'react';
import { addCource, reducer, getCources, deleteCource } from "../utils/reducers/changeReducer";

const Change = () => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');

    const [state, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getCources();
            dispatch({ type: 'GET_COURCE', payload: data });
        };
        fetchCourses();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !course) return;

        const data = await addCource({ name, course });
        dispatch({ type: 'ADD_COURCE', payload: data });

        setName('');
        setCourse('');
    };

    const handleDelete = async (id) => {
        await deleteCource(id);
        dispatch({ type: 'DELETE_COURCE', payload: id });
    };

    const handleEdit = async (id) => {

    }

    return (
        <div>
            <h2 className='text-5xl text-center'>Change</h2>

            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 m-5'>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter name"
                />
                <input
                    type="text"
                    value={course}
                    onChange={e => setCourse(e.target.value)}
                    placeholder="Enter course"
                />
                <button type="submit">Add</button>
            </form>

            <div>
                {state.length > 0 ? (
                    state.map((item) => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.course}</p>
                            <button onClick={() => handleEdit(item.id)}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p>No courses available</p>
                )}
            </div>
        </div>
    );
};

export default Change;
