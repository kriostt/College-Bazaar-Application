import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigator = useNavigate();

  const studentId = sessionStorage.getItem('studentId');
  const hashedPassword = sessionStorage.getItem('hashedPassword');
  const usrID = sessionStorage.getItem('usrID');

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    // If user confirms, log out
    if (confirmLogout) {
      // Remove session items
      sessionStorage.removeItem('studentId');
      sessionStorage.removeItem('hashedPassword');
      sessionStorage.removeItem('usrID');
      navigator('/');
    }
  };

  return (
    <div className='bg2'>
      <h1 className='font-white'>Red Deer Polytechnic Bazaar</h1>
      {studentId && hashedPassword && usrID && (
        <h1 className='font-white' style={{ marginLeft: '1867px' , cursor: 'pointer' }} onClick={handleLogout}>
          Logout
        </h1>
      )}
    </div>
  );
}

export default Header;
