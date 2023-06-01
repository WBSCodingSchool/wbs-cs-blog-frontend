import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-light'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          City Diary
          <span role='img' aria-label='book'>
            📖🥰
          </span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul
            className='navbar-nav ms-auto mb-lg-0 align-items-center'
            {...(() => windowWidth < 576 && { 'data-bs-toggle': 'collapse', 'data-bs-target': '#navbarNav' })()}
          >
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                <span>Login</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='nav-link'>
                <span>Register</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/secret/create' className='nav-link'>
                <span>Create post</span>
              </Link>
            </li>
            <li className='nav-item'>
              <span className='nav-link' style={{ cursor: 'pointer' }}>
                <span>Logout</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
