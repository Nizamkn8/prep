import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await data.json();
        setUsers(res)
      }
      catch(err) {
        console.log(err);
      }
      finally {
        setLoading(false);
      }
    }
    fetchUser();
  },[])

  return (
  <UserContext.Provider value={{users,loading}}>
    {children}
  </UserContext.Provider>
  )
}
