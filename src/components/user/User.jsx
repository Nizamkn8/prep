import { useContext } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const User = ({name,age}) => {

  const { users, loading } = useContext(UserContext)

  console.log(users);

  if(loading) return <div>Loading...</div>

  return (
    <div>
      {
        users.map( (user) => (
          <Link to={`/users/${user.id}`} key={user.id}> {user.name} </Link>
        ))
      }
      <h2>{name}</h2>
      <h2>{age}</h2>
    </div>
  )
}

export default User
