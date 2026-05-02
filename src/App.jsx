import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./components/user/User";
import Home from "./components/pages/Home";
import Search from "./components/elements/search/Search";
import Pagination from "./components/elements/pagination/Pagination";
import FormWizard from "./components/elements/form-wizard/FormWizard";
import Form from "./components/elements/form/Form";
import UserDetail from "./components/pages/UserDetail";
import Dashboard from "./components/pages/Dashboard";
import Users from "./components/elements/crud/Users";
import AddUser from "./components/elements/crud/AddUser";
import EditUser from "./components/elements/crud/EditUser";
import Login from "./components/elements/login/Login";
import Register from "./components/elements/register/Register";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pagination" element={<Pagination />} />
        {/* Protected Routes */}
        <Route path="/user" element={<User />} />

        <Route path="/users/:id" element={<UserDetail />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* Optional Practice Pages */}
        <Route path="/form" element={<Form />} />
        <Route path="/form-wizard" element={<FormWizard />} />
        <Route path="/users-crud" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </>
  );
}

export default App;
