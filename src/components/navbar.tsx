import navLogo from "../assets/logo-text.png"


export default  navbar
function navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
            
            <img src={navLogo} alt=""/>
           
           
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}