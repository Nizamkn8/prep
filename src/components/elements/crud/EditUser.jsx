import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
  });

  // 🔹 Load existing user
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userToEdit = users.find((u) => u.id === Number(id));

    if (userToEdit) {
      setForm(userToEdit);
    }
  }, [id]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Submit updated data
  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) =>
      user.id === Number(id) ? { ...form, id: user.id } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/users-crud");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
      /> <br /><br />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
      /> <br /><br />

      <input
        name="city"
        value={form.city}
        onChange={handleChange}
      /> <br /><br />

      <button type="submit">Update</button>
    </form>
  );
};

export default EditUser;
