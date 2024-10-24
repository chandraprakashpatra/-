import { motion } from 'framer-motion';
import '../../styles/about.css';
import passportPhoto from './passport_photo__1_-removebg-preview.png'; // Ensure the correct path

function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    > 
      <h2>About Me</h2>
      <div className="about-content">
        <div id='myfont'>
            
         <h3>Hi, I'm Chandraprakash Patra,</h3><br />
         a passionate software developer with a strong focus on
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo modi possimus dolor similique quas facere, eum blanditiis quis nisi necessitatibus consequuntur dolore vitae? Porro id aliquam, aspernatur magnam dolorem repudiandae.
         
        </div>
        <img 
          src={passportPhoto} 
          alt="Chandraprakash Patra" 
          className="about-image" 
        />
      </div>
    </motion.section>
  );
}
export default About;
