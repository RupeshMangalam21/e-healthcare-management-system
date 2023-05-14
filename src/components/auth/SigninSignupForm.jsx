import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../../style/SigninSignupForm.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const SigninSignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [isSignup, setIsSignup] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(currentUser, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate.push('/dashboard');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        username,
        email,
        createdAt: new Date(),
      });
      console.log('User added with ID: ', docRef.id);
      setIsSignup(false);
      setEmail('');
      setPassword('');
      setUsername('');
      setError(null);
      navigate.push('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

 return (
    <div className="container-ss">
      <div className="forms-container-ss">
        <div className={`signin-signup-ss ${isSignup ? 'signup-mode-ss' : ''}`}>
          <form onSubmit={handleLogin} className="sign-in-form-ss">
            <h2 className="title-ss">Sign in</h2>
            <div className="input-field-ss">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field-ss">
              <FontAwesomeIcon icon={faLock} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btn-ss solid" />
            <p className="social-text-ss">Or Sign in with social platforms</p>
            <div className="social-media-ss">
              <a href="#" className="social-icon-ss">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon-ss">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon-ss">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon-ss">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form onSubmit={handleSignup} className="sign-up-form-ss">
            <h2 className="title-ss">Sign up</h2>
            <div className="input-field-ss">
        <FontAwesomeIcon icon={faUser} />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-field-ss">
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field-ss">
        <FontAwesomeIcon icon={faLock} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input type="submit" className="btn-ss" value="Sign up" />
      <p className="social-text-ss">Or Sign up with social platforms</p>
      <div className="social-media-ss">
        <a href="#" className="social-icon-ss">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon-ss">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon-ss">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon-ss">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  </div>
  <div className="panels-container-ss">
    <div className="panel-ss left-panel-ss">
      <div className="content-ss">
        <h3>New here ?</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
        </p>
        <button className="btn-ss transparent" onClick={() => setIsSignup(true)}>
          Sign up
        </button>
      </div>
      <img src='../../assets/log.svg' className="image-ss" alt="signin" />
    </div>
    <div className="panel-ss right-panel-ss">
      <div className="content-ss">
        <h3>One of us ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
        </p>
        <button className="btn-ss transparent" onClick={() => setIsSignup(false)}>
          Sign in
        </button>
      </div>
      <img src='../../assets/register.svg' className="image-ss" alt="signup" />
    </div>
  </div>
</div>
</div>
);
};

export default SigninSignupForm;