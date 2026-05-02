import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/UserContext";

const Search = () => {

  const { users,loading} = useContext(UserContext)
  const [searchKey,setSearchKey] = useState("");
  const [debounceVal,setDebounceVal] = useState(""); //for debounce search

  // for debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(searchKey);
    },2000)

    return () => clearTimeout(timer);
  },[searchKey])

  const filteredUsers = users.filter((user) =>
    //user.name.toLowerCase().includes(searchKey.toLowerCase())   //normal search
    user.name.toLowerCase().includes(debounceVal.toLowerCase())
  )

  console.log(filteredUsers);


  if (loading) return <div>Loading....</div>
  return (
    <div>

      <input type="text" onChange={(e) => setSearchKey(e.target.value)}/>
      {filteredUsers.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default Search
