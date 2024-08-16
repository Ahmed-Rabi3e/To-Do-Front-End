import React from "react";

const TodoItem = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) => {
  return (
    <div className="flex bg-white px-6 py-8 gap-10 my-4">
      <div className={`${isCompleted ? "opacity-75 line-through" : "opacity-100"}`}>
        <h4 className="text-primaryDark font-bold">{title}</h4>
        <p>{description}</p>
      </div>
      <div className="flex gap-4 items-center ml-auto">
        <input
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={isCompleted}
          className="w-7 h-7"
        />
        <button onClick={() => deleteHandler(id)} className="bg-primaryDark py-1.5 px-8 rounded text-white font-semibold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
