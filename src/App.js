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
    localStorage.getItem("todos");
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if(todos.length==0){
      sno =0;
    }else{
      sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    }
    
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo]);
    console.log(newTodo);

    if(localStorage.getItem("todos")){
      
    }
  }

  const [todos, setTodos] = useState([]);

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
