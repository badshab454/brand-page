const Navigation = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <a href="#">
            <img src="/img/brand_logo.png" alt="logo" />{" "}
          </a>
        </div>
        <ul>
          <li>
            <a href="#">MENU</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <a href="#">
          <button>Login</button>
        </a>
      </nav>
    </>
  );
};

export default Navigation;
