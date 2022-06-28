import {  useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import { EditUserForm } from "./forms/EditUserForm";

import { UserTable } from "./tables/UserTable";

function App() {

  const userData = [
    { id: 1, name: "Nishanth", username: "mr-black" },
    { id: 2, name: "Vaseekaran", username: "vasee" },
    { id: 3, name: "Vijaysurya", username: "surya" },
  ];

  //! Adding new users
  const addUser = (user) => {
    user.id = users.length + 1;
    // ...users old user ; user is new user
    setUsers([...users,user])
  }

  //! delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user)=>user.id!==id))
  }

  const[users,setUsers] =useState(userData);

  const[editing,setEditing] = useState(false)
  const initialFormState = {
    id: null,
    name: '',
    username: '',
  };
  const[currentUser,setCurentUSer] = useState(initialFormState)


  const editRow = (user) => {
    setEditing(true);
    setCurentUSer({ id: user.id, name: user.name, username: user.username });
  }

  const updateUser = (id,updatedUser) => {
    setEditing(false);
    setUsers(users.map((user)=>(user.id===id?updatedUser:user)));
  }
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ?(
            <div>
              <h2>Edit User Form</h2>
              < EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>) : (<div>
              <h2>Add User</h2>
          <AddUserForm addUser={ addUser}/>
          </div>)
        }

        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={ users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
