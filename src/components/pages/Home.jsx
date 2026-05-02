import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home page</h2>
      <ul>
        <li>
          <Link to="/user">Users</Link>
        </li>
        <li>
          <Link to="/pagination">Pagination</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/search">Debounce search</Link>
        </li>
        <li>
          <Link to="/form-wizard">Form wizard</Link>
        </li>
        <li>
          <Link to="/users-crud">Crud</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
