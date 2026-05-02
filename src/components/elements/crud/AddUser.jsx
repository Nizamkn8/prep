import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddUser = () => {

  const [form,setForm] = useState({
    name: "",
    email: "",
    city: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      id: Date.now(),
      ...form,
    }

    localStorage.setItem(
      "users",
      JSON.stringify([...existingUsers,newUser])
    )

    navigate("/users-crud");

  }

  return (
    <div>
      <h2>AddUser</h2>
      <form action="" onSubmit={handleSubmit}>
        <input name="name" type="text" onChange={handleChange} /> <br /> <br />
        <input name="email" type="text" onChange={handleChange} /> <br /> <br />
        <input name="city" type="text" onChange={handleChange} /> <br /> <br />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
}

export default AddUser
