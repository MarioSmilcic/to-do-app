import TodosList from "./TodosList";
import InputTodo from "./InputTodo";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "../components/Navbar";

const TodoContainer = (props) => {
  const [todos, setTodos] = useState([]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };
  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="flex flex-col justify-center items-center max-w-xl my-0 mx-auto">
            <div className="w-full pt-32 px-2.5 pb-16">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default TodoContainer;
