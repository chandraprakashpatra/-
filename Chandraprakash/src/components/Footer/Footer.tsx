import '../../styles/footer.css';
import 'animate.css';

function Footer() {
  return (
    <footer id="contact" className="footer animate__animated animate__bounceIn">
      <p>Connect with me on:</p>
      <ul>
        <li><a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="mailto:chandraprakashpatra2002@gmail.com">Email</a></li>
      </ul>
      <p>&copy; 2024 Chandraprakash Patra</p>
    </footer>
  );
}

export default Footer;
