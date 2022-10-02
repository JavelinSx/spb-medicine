import Authorization from "./Authhorization"

function Register(){
    return(
        <Authorization 
        title={'Регистрация'} 
        textButton={'Зарегистрироваться'} 
        textLabel={'Уже есть аккаунт? '}
        textLink={'Войти'}
        link={'/sign-in'}>

            <div className="form-input-container">
                <label htmlFor='login' className="form-label">
                    Email
                </label>
                <input type='email' id='login' className="form-input" requaried='true'>

                </input>
            </div>
            <div className="form-input-container">
                <label htmlFor='password' className="form-label">
                    Пароль
                </label>
                <input type='password' id='password' className="form-input" requaried='true'>
                    
                </input>
            </div>
            <div className="form-input-container">
                <label htmlFor='passwordcheck' className="form-label">
                    Повторите пароль
                </label>
                <input type='password' id='passwordcheck' className="form-input" requaried='true'>
                    
                </input>
            </div>

        </Authorization>
    )
}

export default Register