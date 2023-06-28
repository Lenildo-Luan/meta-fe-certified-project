import './index.css';
import Logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <>
      <header>
        <div className='container'>
          <img src={Logo} alt="Company logo" />
          
          <nav>
            <ul>
              <li><a className='section-categories' href="index.html">Home</a></li>
              <li><a className='section-categories' href="about.html">About</a></li>
              <li><a className='section-categories' href="menu.html">Menu</a></li>
              <li><a className='section-categories' href="reservations.html">Reservations</a></li>
              <li><a className='section-categories' href="order.html">Order Online</a></li>
              <li><a className='section-categories' href="login.html">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
