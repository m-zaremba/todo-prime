import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {firebase} from '../../firebase';
import { AuthContext } from '../../context';

const Login = ({ history, setShowLogin, setShowSignup }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="login__backshadow">
      <div className='login__form'>
        <div className="login__form-title">
          <h6>Login</h6>
          <svg onClick={() => setShowLogin(false)} width="24" height="24"><path fill="currentColor" fillRule="evenodd" d="M12 10.62l4.833-4.834a.976.976 0 111.381 1.38L13.381 12l4.833 4.833a.976.976 0 01-1.38 1.381L12 13.381l-4.833 4.833a.976.976 0 01-1.381-1.38L10.619 12 5.786 7.167a.976.976 0 111.38-1.381L12 10.619z"></path></svg>
        </div>
        <div className="login__form-separator">
          <div className="login__form-separator-middle">
            WITH
          </div>
        </div>
        <form className='login__form-content' onSubmit={handleLogin}>
          <label htmlFor='email'>Email</label>
          <input name="email" type="email"/>
          <label htmlFor='password'>Password</label>
          <input name="password" type="password" />
          <button type="submit">Log in</button>
        </form>
        <div className="login__form-separator"></div>
        <div className="login__form-help">
          <p className="login__form-redirect">
            Don't have an account?
          </p>
          <p className="login__form-redirect-action" onClick={() => {setShowLogin(false); setShowSignup(true);}}>
            Sign up in seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
