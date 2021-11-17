/*
import '../app.css';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Header from './Header';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

const TodoContainer = (props) => {
  const [todos, setTodos] = useState('');

  const handleChange = (id) => {
    setTodos((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    });
  };
  const delTodo = (id) => {
    setTodos({
      todos: [
        ...todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos({
      todos: [...todos, newTodo],
    });
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };
  /* componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  } */

/* componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  } */

/*
  return (
    <div className="todoContainer">
      <div className="inner">
        <Header />
        <InputTodo addtodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};
export default TodoContainer;

*/
import '../app.css';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Header from './Header';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';

import Navbar from '../components/Navbar';

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
    console.log('test run');
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);
  /* function getInitialTodos() {
    //getting stored items

    temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  } */
  useEffect(() => {
    console.log('drugi efect');
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="todoContainer">
            <div className="inner">
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
