import { useState } from "react"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted");
      setFormData({name: "",email: "",password: "",});
    }
  };

  const validate = () => {
    const errors = {}
    if(!formData.name.trim()) {
      errors.name = "Enter valid name";
    }
    if(!formData.email.includes("@")) {
      errors.email = "Enter valid email address"
    }
    if(formData.password.length < 6) {
      errors.password = "password should contain atleast 6 chars"
    }
    return errors;
  }


  return (
    <div>
      <h2>Form</h2>
      {errors.name && <p>{errors.name}</p>}
      {errors.email && <p>{errors.email}</p>}
      {errors.password && <p>{errors.password}</p>}
      <form action="" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={formData.name}
          placeholder="Enter name..."
          onChange={handleChange}
        />
        <br />
        <input
          name="email"
          type="email"
          value={formData.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <br />
        <input
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter password..."
          onChange={handleChange}
        />
        <br />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form
