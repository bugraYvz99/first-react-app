import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";

const UserDetail =  ({ users }) => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
          setUser(result.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, [id]);
  
    if (!user) return null;
  
    return (<div>
        
      <div className="position-absolute top-50 start-50 translate-middle h-100 d-inline-block">
        <ul className="list-group bg-info bg-gradient border border-light text-uppercase fs-3 text ">
            <li><a className="text-uppercase " href={`/`}>Home</a></li>
          <li className="list-group-item text-primary border border-primary">Name: {"" + user.name}</li>
          <li className="list-group-item text-primary border border-primary">Username: {"" + user.username}</li>
          <li className="list-group-item text-primary border border-primary">Email: {"" + user.email}</li>
          <li className="list-group-item text-primary border border-primary">
            User address: {"" + user.address.city + "," + user.address.street + "," + user.address.suite + "," + user.address.zipcode}
          </li>
          <li className="list-group-item text-primary border border-primary">User Company: {"" + user.company.name}</li>
          <li className="list-group-item text-primary border border-primary">User Website: {"" + user.website}</li>
        </ul>
      </div>
      </div>
    );
  };
  export default UserDetail;
