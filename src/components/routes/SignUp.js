import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {firebase} from '../../firebase';

const SignUp = ({ history, setShowSignup }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const {email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/home");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="signup__backshadow">
      <div className='signup__form'>
        <div className="signup__form-title">
          <h6>Sign up in seconds</h6>
          <svg onClick={() => setShowSignup(false)} width="24" height="24"><path fill="currentColor" fillRule="evenodd" d="M12 10.62l4.833-4.834a.976.976 0 111.381 1.38L13.381 12l4.833 4.833a.976.976 0 01-1.38 1.381L12 13.381l-4.833 4.833a.976.976 0 01-1.381-1.38L10.619 12 5.786 7.167a.976.976 0 111.38-1.381L12 10.619z"></path></svg>
        </div>
        <div className="signup__form-separator">
          <div className="signup__form-separator-middle">
            WITH
          </div>
        </div>
        <form className='signup__form-content' onSubmit={handleSignUp}>
          <label htmlFor='email'>Email</label>
          <input name="email" type="email"/>
          <label htmlFor='password'>Password</label>
          <input name="password" type="password" />
          <button type="submit">Create My Account</button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
