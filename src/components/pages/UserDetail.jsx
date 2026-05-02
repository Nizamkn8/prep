import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loadingState, setLoadingState] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        const res = await data.json();
        setUser(res);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingState(false);
      }
    };
    fetchUser();
  }, [id]);

  console.log(user);

  if (loadingState) return <div>Loading.....</div>;
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>UserDetail</h2>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <div>{user?.address?.city}</div>
    </div>
  );
};

export default UserDetail;
