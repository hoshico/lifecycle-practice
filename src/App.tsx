import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Todo } from './Todo'
import { UserCard } from './components/UserCard'

const user = {
  id: 1,
  name: "やす",
  email: "1234@aaa.com",
  address: "ADDRESS"
}


// typeは基本大文字スタート
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([])
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <UserCard user={user}/>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/>
      ))}
    </div>
  )
}
