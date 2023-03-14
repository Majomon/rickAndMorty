import React from 'react'
import { useState,useEffect } from 'react'
import style from "./Form.module.css"
import validate from "./validate.js"


export default function Form() {

  const [userData, setUserData] = useState({
    username:"",
    password:"",
  });

  const [errors, setErrors] = useState({
    username:"",
    password:"",
  });


  const handleInputChange=(event)=>{
    const property=event.target.name;
    const value=event.target.value;
    
    setUserData({...userData,[property]:value})
    validate({...userData,[property]:value},setErrors,errors)
  }

  return (
    <form action="" className={style.form}>
    <div>
      <label htmlFor="username">Username: </label>
      <input type="text" name='username' value={userData.username} onChange={handleInputChange}/>
      <h2>{errors.username}</h2>
    </div>
    <div>
      <label htmlFor="password">Password: </label>
      {/* Cambiamos el tipo de input a "password" */}
      <input type="password" name='password' value={userData.password} onChange={handleInputChange}/>
      <p>{errors.password}</p>
    </div>
    <button>LOGIN</button>
  </form>
  )
}

