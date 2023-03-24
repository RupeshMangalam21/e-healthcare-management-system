import React from 'react';

const Footer = () => {
    return (
        <div>
            <div style={{ minHeight: '27vh', position: 'relative' }}>
            <footer style={{ 
  background: 'linear-gradient(to right, #9254d8, #99dbe5)',
  padding: '10px',
  textAlign: 'center',
  position: 'absolute',
  bottom: '0',
  width: '100%'
}}>
        <p style={{ fontSize: '14px', color: 'white' }}>Copyright © 2023 AVA-H.
          All rights reserved.</p>
      </footer>
    </div>
        </div>
    );
}


export default Footer;
