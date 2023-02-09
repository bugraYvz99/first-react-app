import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

const UserDetail =  ({ users }) => {
  
  const { id } = useParams();
  if (!users.length) return null;
 

  return (
    <div className="position-absolute top-50 start-50 translate-middle h-100 d-inline-block">
       <ul className="list-group bg-info bg-gradient border border-light ">
      <li className="list-group-item text-primary border border-primary">Name: {""+users[id].name}</li>
      <li className="list-group-item text-primary border border-primary">Username: {""+users[id].username}</li>
      <li className="list-group-item text-primary border border-primary">Email: {""+users[id].email}</li>
      <li className="list-group-item text-primary border border-primary">User address: {""+users[id].address.city+","+users[id].address.street+","+users[id].address.suite+","+users[id].address.zipcode}</li>
      <li className="list-group-item text-primary border border-primary">User Company: {""+users[id].company.name}</li>
      <li className="list-group-item text-primary border border-primary">User Website: {""+users[id].website}</li>
    </ul>
 
    </div>
  );
};
export default UserDetail;
