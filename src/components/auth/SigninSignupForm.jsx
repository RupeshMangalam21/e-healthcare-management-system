import React from 'react';
import "../../style/SigninSignupForm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

const SigninSignupForm = () => {
  return (
    <div className="container-ss">
      <div className="forms-container-ss">
        <div className="signin-signup-ss">
          <form action="#" className="sign-in-form-ss">
            <h2 className="title-ss">Sign in</h2>
            <div className="input-field-ss">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Username" />
            </div>
            <div className="input-field-ss">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn-ss solid" />
          </form>
          <form action="#" className="sign-up-form-ss">
            <h2 className="title-ss">Sign up</h2>
            <div className="input-field-ss">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Username" />
            </div>
            <div className="input-field-ss">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password" />
            </div>
            <div className="input-field-ss">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Email" />
            </div>
            <input type="submit" className="btn-ss" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container-ss">
        <div className="panel-ss left-panel-ss">
          <div className="content-ss">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn-ss transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="src/assets/log.svg" className="image" alt="" />
        </div>
        <div className="panel-ss right-panel-ss">
          <div className="content-ss">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="src/assets/register.svg" className="image-ss" alt="" />
        </div>
      </div>
      <script src="index.html"></script>
    </div>
  );
}

export default SigninSignupForm;
