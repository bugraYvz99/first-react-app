import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import TodoTable from "./components/TodoTable";
import UserTable from "./components/UserTable";
import PostTable from "./components/PostTable";
import Navbar from "./components/Navbar";

function App() {
  const [todos, setTodos] = useState([]); // !!! UseState asenkron çalışır, sayfa ikinci kez render edildiği zaman değer ancak o zaman değişir.
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/todos"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/users"),
    ]).then((results) => {
      const [todosResult, postsResult, usersResult] = results.map((result) => result.data);
      setTodos(todosResult);
      setPosts(postsResult);
      setUsers(usersResult);
    });
    
  }, []);
  
  

  return (
    <div className="container my-5">
      <Navbar/>
      <h1 className="text-center">Users</h1>
      <UserTable users={users} />
      <h1 className="text-center">Todos</h1>
      <TodoTable todos={todos} />
      <h1 className="text-center">Posts</h1>
      <PostTable posts={posts} />
      
    </div>
  );}

export default App;
