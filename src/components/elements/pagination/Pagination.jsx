import { useEffect, useState } from "react";

const Pagination = () => {
  const [users, setUsers] = useState([]);
  const [initUserCount, setInitUserCount] = useState(5);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {

      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await data.json();
        setUsers(res);
      }
      catch(err) {
        console.log(err);
      }
      finally {
        setLoadingState(false);
      }

    };
    fetchUsers();
  }, []);

  if (loadingState) return <p>Loading the page</p>
  
  return (
    <div>
      <div>
        <h1>Pagination</h1>
        {users.slice(0, initUserCount).map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}

        <div>
          {initUserCount < users.length && (
            <button onClick={() => setInitUserCount((prev) => prev + 3)}>
              Load More
            </button>
          )}
          {initUserCount > 5 && (
            <button onClick={() => setInitUserCount((prev) => prev - 3)}>
              Load Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
