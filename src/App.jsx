import "./App.css";

const App = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <img src="/img/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
    </>
  );
};

export default App;
