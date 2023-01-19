import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (navigate) => {
  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user_id');
    // navigate('/login');
  };

  const user_id = window.localStorage.getItem('user_id');

  return (
    <header>
      <div className="container">
        <div className="links">
          <Link to="/posts">
            <button id="homebutton">Acebook</button>
          </Link>
          <Link to="/posts">
            <button id="Feed">View Feed</button>
          </Link>
          <Link to={`/users/${user_id}`}>
            <button id="profile-page">My Profile</button>
          </Link>
          <Link to="/login">
            <button className="logout" onClick={logout}>
              Logout
            </button>
          </Link>
          {/* <a href='/posts'>Acebook</a>
          <a href='/posts'>View Feed</a>
          <a href='/profile'>My Profile</a>
          <a href='/login'>Logout</a> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

