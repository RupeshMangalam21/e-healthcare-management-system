import React from 'react';
import Main from './pages/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const apikey =process.env.APIKEY;  
  console.log(apikey);
  return (
    <div>
      <h1>apiKey</h1>
      <Main />
    </div>
  );
}


export default App;
