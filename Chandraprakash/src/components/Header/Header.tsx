import '../../styles/header.css';
import 'animate.css';

function Header() {
  return (
    <header className="animate__animated animate__fadeIn">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

