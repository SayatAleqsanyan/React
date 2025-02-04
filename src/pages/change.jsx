import React, { useEffect, useReducer, useState } from "react";
import {
  addCource,
  reducer,
  getCources,
  deleteCource,
  editCource,
} from "../utils/reducers/changeReducer";

const Change = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [state, dispatch] = useReducer(reducer, []);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCources();
      dispatch({ type: "GET_COURCE", payload: data });
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !course) return;

    const data = await addCource({ name, course });
    dispatch({ type: "ADD_COURCE", payload: data });

    setName("");
    setCourse("");
  };

  const handleDelete = async (id, data) => {
    await deleteCource(id);
    dispatch({ type: "DELETE_COURCE", payload: id });
  };

  const handleEdit = async (item) => {
    // Լրացնել input-ները խմբագրման համար
    setName(item.name);
    setCourse(item.course);
    setEditingId(item.id);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name || !course) return;

    try {
      // Ուղարկել թարմացված տվյալները
      const updatedData = { name, course };
      const data = await editCource(editingId, updatedData);

      // Ուղղել action type-ը
      dispatch({ type: "EDIT_COURCE", payload: data });

      // Վերականգնել վիճակները
      setName("");
      setCourse("");
      setEditingId(null);
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div>
      <h2 className="text-7xl text-center">Change</h2>

      <form
        onSubmit={editingId ? handleUpdate : handleSubmit}
        className="flex flex-col justify-center items-center gap-4 m-5"
      >
        <input
          className="block w-[300px] p-2 text-lg"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          className="block w-[300px] p-2 text-lg"
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Enter course"
        />

        <button
          className="block w-[300px] p-2 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-700 active:bg-blue-900"
          type="submit"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <div className="flex justify-evenly items-center flex-wrap gap-4 w-full border-gray-100 p-10 ">
        {state.length > 0 ? (
          state.map((item) => (
            <div
              key={item.id}
              className="m-5 p-10 text-center min-w-[300px] min-h-[200px] flex flex-col justify-around bor max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <p className="font-bold text-lg p-2">{item.name}</p>
              <p className="font-bold text-lg p-2">{item.course}</p>
              <div className="flex justify-evenly items-center gap-4">
                <button
                  className="w-[100px] p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 active:bg-blue-900"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="w-[100px] p-2 bg-red-500 text-white rounded-md hover:bg-red-700 active:bg-red-900"
                  onClick={() => handleDelete(item.id)}
                >
                  Remove
                </button>
              </div>
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
