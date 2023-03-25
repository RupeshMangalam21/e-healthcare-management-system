import { signOut } from 'firebase/auth';
import { auth } from '../lib/init-firebase';




const DashBoard = () => {

    const handleSignOut=()=>{
        signOut(auth).then(()=>{
           console.log("sign out ")

        }).catch(error=>console.log(error))

    }
    

   
    return (
        <div>
          <button onClick={handleSignOut}>sign out</button>
        </div>
    );
}

export default DashBoard;
