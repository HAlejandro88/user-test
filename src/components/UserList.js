


const UserList = ({users, selectedUser, setSelectedUser, removeUser}) => {

    const  handleSelectUser = (index, user) => {
        setSelectedUser({
            ...user,
            id: index
        })
    }
    

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>phone</th>
                        <th>controls</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button onClick={(e) => handleSelectUser(index,user)}>Edit</button>
                                    <button onClick={(e) => removeUser(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default UserList