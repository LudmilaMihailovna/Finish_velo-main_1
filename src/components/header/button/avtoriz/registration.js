import React, {useState} from 'react';
import css from './registration.module.scss';
import {useForm} from "react-hook-form";
import {signUp} from "../../../../api/sing_up";

const formFields = [
  {
    name: "email",
    label: "Email*",
    type: "email",
    required: true,
  },
  {
    name: "password",
    label: "Password*",
    type: "password",
    required: true,
  },
  {
    name: "clientId",
    label: "Client ID*",
    type: "text",
    required: true,
  },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: false,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: false,
  },
];


function Registration() {
  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
    signUp(data)
  }

    return (
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)} className={css.registration}>
          {formFields.map((field) => {
            return(
              <div key={field.name} className={css.field}>
                <label>{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  {...register(field.name, { required: field.required })}
                />
              </div>  
            )
          })}
            <input type="submit"/>
          </form>
            {/*<form className={css.registration}>*/}
            {/*  <div className="messages">*/}
            {/*    {errorMessage()}*/}
            {/*    {successMessage()}*/}
            {/*  </div>*/}
            {/*  <button name="close-button">&times;</button>*/}
            {/*  <label htmlFor="username">Логин:</label>*/}
            {/*  <input*/}
            {/*    type="text"*/}
            {/*    id="username"*/}
            {/*    value={username}*/}
            {/*    onChange={handleUsername}*/}
            {/*  />*/}
            {/*  <br/>*/}
            {/*  <label htmlFor="password">Пароль:</label>*/}
            {/*  <input*/}
            {/*    type="password"*/}
            {/*    id="password"*/}
            {/*    value={password}*/}
            {/*    onChange={handlePassword}*/}
            {/*  />*/}
            {/*  <br/>*/}
            {/*  <label htmlFor="email">Email</label>*/}
            {/*  <input*/}
            {/*    type="email"*/}
            {/*    id="email"*/}
            {/*    onChange={handleEmail}*/}
            {/*    value={email}*/}
            {/*  />*/}
            {/*  <br/>*/}
            {/*  <label htmlFor="ID">ID клиента</label>*/}
            {/*  <input*/}
            {/*    type="ID"*/}
            {/*    id="ID"*/}
            {/*    onChange={handleID}*/}
            {/*    value={ID}*/}
            {/*  />*/}
            {/*  <br/>*/}
            {/*  <label htmlFor="firstname">Ваше имя:</label>*/}
            {/*  <input*/}
            {/*    type="text"*/}
            {/*    id="firstname"*/}
            {/*    value={firstname}*/}
            {/*    onChange={handleFirstname}*/}
            {/*  />*/}
            {/*  <br/>*/}
            {/*  <label htmlFor="lastname">Ваша фамилия:</label>*/}
            {/*  <input*/}
            {/*    type="text"*/}
            {/*    id="lastname"*/}
            {/*    value={lastname}*/}
            {/*    onChange={handleLastname}*/}
            {/*  />*/}
            {/*  <button name="button_2" type="submit" onClick={handleSubmit}>Зарегистрироваться</button>*/}
            {/*</form>*/}
        </div>
      );
  }

  export default Registration;
