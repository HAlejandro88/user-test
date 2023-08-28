import { useEffect, useState } from 'react';
import './App.css';
import AddEditUser from './components/AddEditUser';
import UserList from './components/UserList';

function App() {

  const initUsers = [
    {firstName: 'John', lastName: 'Doe', phone: '3455'},
    {firstName: 'JohnDos', lastName: 'DoeDos', phone: '6789'}
  ]

  const [selectUser, setSelectUser] = useState(null)

  const [users, setUsers] = useState(initUsers)

  const addUser = user => {
    setUsers([...users, user])
  }

  const editUser = (index,user) => {
    const updatedUsers = [...users]
    updatedUsers[index] = user
    setUsers(updatedUsers)
    setSelectUser(null)
  }


  console.log(selectUser);


  return (
    <div className="App">
      <div>
          <AddEditUser selectUser={selectUser}  addUser={addUser}
            editUser={editUser}  />
      </div>
      <div>
        <UserList users={users}  selectedUser={selectUser} setSelectedUser={setSelectUser}/>
      </div>
    </div>
  );
}

export default App;
