import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go market to get this job done1"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go mall to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go ghat to get this job done3"
    },
  ]);

  return (
    <>
      <Header title="My Todos-List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
