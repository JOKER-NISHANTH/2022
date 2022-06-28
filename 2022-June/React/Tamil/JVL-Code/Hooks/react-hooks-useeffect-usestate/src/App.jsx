import {  useState } from "react";
import { UserTable } from "./tables/UserTable";

function App() {

  const userData = [
    {id:1,name:"Nishanth",username:"mr-black"},
    {id:2,name:"Vaseekaran",username:"vasee"},
    {id:3,name:"Vijaysurya",username:"surya"},
  ]
  const[users,setUsers] =useState(userData);
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable users={ users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
