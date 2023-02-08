import React from "react";
import TestComponent from "./TestComponent";


 
const UserTable = ({ users }) => {
  
    return (
      <div>
        <TestComponent onClick="Test">
            <div>TEST</div>
          </TestComponent>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };
 export default UserTable;