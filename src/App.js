
import axios, { formToJSON } from "axios";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import TodoTable from "./components/TodoTable.js"
import UserTable from "./components/UserTable.js"
import PostTable from "./components/PostTable.js"
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import UserDetail from"./components/UserDetail.js"
import Navbar from "./components/Navbar.js"
import "./App.css";
import Home from "./components/Home";

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


  const Home = () =>{
    return  <div> <Navbar />
    <h1 className="text-center">Users</h1>
    <UserTable users={users} />
    <h1 className="text-center">Todos</h1>
    <TodoTable todos={todos} />
    <h1 className="text-center">Posts</h1>
    <PostTable posts={posts} />
  </div>
 }
 

  return (
    <Router>
      <div className="container my-5">
        
        <Routes>
          <Route exact path="/" element={<Home todos={todos} posts={posts} users={users}/>}/>
          <Route path="/users/:id" element={<UserDetail users={users} />} />
        </Routes>
      </div>
    </Router>
  );}

export default App;
