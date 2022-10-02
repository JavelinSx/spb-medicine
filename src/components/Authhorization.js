import {Link} from 'react-router-dom'

function Authorization({title, textButton, textLabel, textLink, link, children}){
    return(
        <div className="authorization-container">
            <div className="authorization">
                <form className="form-authorization">
                    <h1 className="form-title">
                        {title}
                    </h1>
                    {children}
                    <button className="form-submit-button">
                        {textButton}
                    </button>
                    <div className="form-redirect">
                        <span className="form-redirect-label">
                        {textLabel}
                        <Link className='form-redirect-link' to={link}>{textLink}</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Authorization