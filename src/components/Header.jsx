import Logo from '../images/Wax-staxx.svg'

function Header() {

  return (
    <div className="header-container">    
        <img className="logo" src={Logo} alt="Logo" />
    </div>
  );
}

export default Header;