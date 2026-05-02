import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Register = () => {
  const { register } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email, password);
    alert("Registered successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      /> <br /><br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      /> <br /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
