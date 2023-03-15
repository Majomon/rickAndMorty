import React, { useState } from "react";
import style from "./Form.module.css";
import validate from "./validate.js";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validate({[property]: value }, setErrors, errors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <form onSubmit={submitHandler} className={style.form}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          className={errors.email ? style.error : style.success}
        />
        <h2>{errors.username}</h2>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        {/* Cambiamos el tipo de input a "password" */}
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          className={errors.username ? style.error : style.sucess}
        />
      </div>
      <button>LOGIN</button>
    </form>
  );
}
