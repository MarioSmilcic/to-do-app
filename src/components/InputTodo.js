import React, { useState } from "react";
const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle("");
    } else {
      alert("Please write something");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mb-5 flex rounded-3xl justify-evenly shadow-lg h-11 outline-none border text-black"
    >
      <input
        type="text"
        className="text-base font-normal pr-1 pl-2 rounded-3xl w-5/6 placeholder:text-gray-400 outline-none"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="submit">Submit</button>
    </form>
  );
};

export default InputTodo;
