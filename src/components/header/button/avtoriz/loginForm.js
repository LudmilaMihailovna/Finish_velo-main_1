import React, {useState} from 'react';
import css from './loginForm.module.scss';
import Modal_avtoriz from './modal_avtoriz';
import {useForm} from "react-hook-form";
import {signUp} from "../../../../api/sing_up";
import {signIn} from "../../../../api/sign_in";

function LoginForm() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signIn(data)
  }
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className={css.loginForm}>
          <div>
            <label>Email</label>
            <input type="text" {...register("email", { required: true })} />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>
      );
  }

  export default LoginForm;

