import css from './header.module.scss';
import {Theft} from './button/theft/theft';
import React, {useState} from 'react';
import LoginForm from './button/avtoriz/loginForm';
import Modal_avtoriz from './button/avtoriz/modal_avtoriz';
import Registration from './button/avtoriz/registration';
import Modal_registration from './button/avtoriz/modal_registration';


export const Header = () => {
  const token = localStorage.getItem("token")
  const onClickLogout = () => {
    localStorage.removeItem('token')
  }
    return (
        <header className={css.header}>
            <h1>Find bicycle</h1>
            <Theft/>
            <Modal_registration buttonText="Регистрация">
                <Registration />
            </Modal_registration>
          {token ? <button onClick={onClickLogout}>Выйти</button> : <Modal_avtoriz buttonText="Войти">
            <LoginForm />
          </Modal_avtoriz>}
        </header>
    )
}
