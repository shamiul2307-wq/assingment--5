import footerImage from "../assets/logo-text.png"
export default Footer   ;

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

           <div className="footer-brand">
           <img src={footerImage} alt=""/>
             
          <p>
            Build your perfect development stack
            with the technologies you love.
          </p>

          <div className="social-links">
            <a href="https://github.com" target="_blank">
              GitHub
            </a>

            <a href="https://twitter.com" target="_blank">
              Twitter
            </a>

            <a href="https://linkedin.com" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Product</h3>
          <a href="#technologies">Technologies</a>
          <a href="#stack">Your Stack</a>
          <a href="#home">Features</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>
      </div>

    </footer>
  );
}