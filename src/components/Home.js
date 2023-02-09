import React from "react";
import TodoTable from "./TodoTable.js";
import UserTable from "./UserTable.js";
import PostTable from "./PostTable.js";
import Navbar from "./Navbar.js";

const Home = (props) => {
  const { todos, posts, users } = props;

  return (
    <div>
      <Navbar />
      <h1 className="text-center">Users</h1>
      <UserTable users={users} />
      <h1 className="text-center">Todos</h1>
      <TodoTable todos={todos} />
      <h1 className="text-center">Posts</h1>
      <PostTable posts={posts} />
    </div>
  );
};

export default Home;