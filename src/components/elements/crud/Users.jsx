import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {

  const [users,setUSers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    console.log(storedUsers);

    if (storedUsers) {
      setUSers(storedUsers);
    }
  }, []);



  return (
    <div>
      <div>
        <Link to="/add-user">Add User</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => navigate(`/edit-user/${user.id}`)}>Edit User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
