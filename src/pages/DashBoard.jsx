import { signOut } from 'firebase/auth';
import { auth } from '../lib/init-firebase';

const DashBoard = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="dashboard">
      <button onClick={handleSignOut}>Sign Out</button>
      <style jsx>{`
        .dashboard {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        button {
          background-color: #333;
          border: none;
          color: #fff;
          padding: 16px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default DashBoard;
