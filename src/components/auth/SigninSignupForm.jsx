import React from 'react';
import "../../style/SigninSignupForm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/react-fontawesome'

const SigninSignupForm = () => {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Email" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="src/assets/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="src/assets/register.svg" className="image" alt="" />
        </div>
      </div>
      <script src="index.html"></script>
    </div>
  );
}

export default SigninSignupForm;
