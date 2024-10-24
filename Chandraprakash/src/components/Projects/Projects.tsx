import '../../styles/projects.css';


function Projects() {
  const projects = [
    {
      title: 'WebServer-Python',
      description: 'A web server written in Python with custom routing and features.',
      link: 'https://github.com/your-username/webserver-python',
    },
    {
      title: 'React Portfolio',
      description: 'A personal portfolio website built using React.',
      link: 'https://your-portfolio-link',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
