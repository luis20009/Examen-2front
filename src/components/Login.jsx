import Notification from "./Notification"
import PropTypes from 'prop-types'
import "./css/login.css"

const LoginForm = (props) => {
    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <Notification message={props.message}/>
            <form className="login-form" onSubmit={props.handleLogin}>
                <div>
                    <label htmlFor="username">Usuario</label>
                    <center>
                    <input
                        id="username"
                        type="text"
                        value={props.username}
                        name="Username"
                        onChange={({ target }) => props.setUsername(target.value)}
                        autoComplete="username"
                    />
                    </center>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <center>
                    <input
                        id="password"
                        type="password"
                        value={props.password}
                        name="Password"
                        onChange={({ target }) => props.setPassword(target.value)}
                        autoComplete="current-password"
                    />
                    </center>
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm