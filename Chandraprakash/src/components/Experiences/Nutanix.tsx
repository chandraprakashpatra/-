import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../styles/nutanix.css';

function Nutanix() {
  const { ref, inView } = useInView({
    triggerOnce: true,   // Trigger animation only once
    threshold: 0.2       // Trigger when 20% of the component is in view
  });

  return (
    <motion.section
      ref={ref}
      className="nutanix-section"
      initial={{ opacity: 0, x: 100 }}    // Start hidden, 100px from the right
      animate={inView ? { opacity: 1, x: 0 } : {}}  // Animate to visible when in view
      transition={{ duration: 1.8 }}      // Animation duration
    >

      
      <br />
      <p>
        During my internship at Nutanix as a Systems Reliability Engineer, I worked on
        various projects including API development, automation, and dashboard creation.
      </p>

      
    </motion.section>
  );
}

export default Nutanix;
