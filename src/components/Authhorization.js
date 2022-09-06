

function Authorization(){
    return(
        <>
        <div className="authorization">
            <form className="form-authorization">
                <h1 className="form-title">
                    Авторизация
                </h1>
                <div className="form-input-container">
                    <label for='login' className="form-label">
                        Логин
                    </label>
                    <input type='text' id='login' className="form-input" requaried>

                    </input>
                </div>

                <div className="form-input-container">
                    <label for='password' className="form-label">
                        Пароль
                    </label>
                    <input type='password' id='password' className="form-input" requaried>
                        
                    </input>
                </div>


                <button className="form-submit-button">
                    Войти
                </button>
            </form>
        </div>
        </>
    )
}

export default Authorization