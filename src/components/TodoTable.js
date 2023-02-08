import React from "react";


 
const TodoTable = ({ todos }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
 export default TodoTable;