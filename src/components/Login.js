import React from "react";
import Authorization from "./Authhorization";

function Login(){
  return (
    <Authorization 
    title={'Вход'} 
    textButton={'Войти'}
    textLabel={'Нет аккаунта? '}
    textLink={'Регистрация'}
    link={'/sign-up'}>
      <div className="form-input-container">
        <label htmlFor="login" className="form-label">
          Email
        </label>
        <input 
            type="Email" 
            id="login" 
            className="form-input" 
            requaried='true'
        ></input>
      </div>
      <div className="form-input-container">
        <label htmlFor="password" className="form-label">
          Пароль
        </label>
        <input
            type="password"
            id="password"
            className="form-input"
            requaried='true'
        ></input>
      </div>
    </Authorization>
  );
};

export default Login;
