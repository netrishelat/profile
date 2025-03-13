import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const projects = [
  { 
    name: "News Website", 
    link: "https://github.com/netrishelat/News-App",
    description: "A website that aggregates news from various sources and displays them in a user-friendly format.",
    technologies: "Node.js, javascript"
  },
  
  // { 
  //   name: "Portfolio Website", 
  //   link: "https://github.com/netrishelat/My-Portfolio",
  //   description: "A personal portfolio website that showcases my skills and experience.",
  //   technologies: "React, Node.js,BootstrapS "
  // },
  { 
    name: "Booking And Closing Automation", 
    //link: "https://github.com/netrishelat/Blog-Website",
    description: "Automates Finace LoanIq Booking and Closing process.",
    technologies: "UiPath Studio,Orchestrator, Excel,PDF,CSV,LoanIQ Automation,"
  },
  { 
    name: "Commission and Vendor Statement Automation", 
    //link: "https://github.com/netrishelat/E-commerce-Website",
    description: "Automates Different Statements.Ex:AllState, oldRepublic,Asuurance Plus,axiom,etc",
    technologies: "Uipath Studio,Orchestrator, Excel,PDf,CSV,MSSQL,NetSuit(3rd Party tool),"
  },
  { 
    name: "Automated Processing", 
    link: "https://github.com/netrishelat/AccountProject",
    description: "A project that automates Photo processing using LLM Model.",
    technologies: "React, Node.js, javascript, MySQL,Express"
  }
];


const Projects = () => {
  return (
    <section id="projects" style={{ padding: '2.5rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <Card key={index} style={{ padding: '1.25rem', backgroundColor: '#4a5568', borderRadius: '0.5rem', color: 'white', height: '100%' }}>
            <Card.Body>
              <Card.Title style={{ fontSize: '1.25rem', fontWeight: '600' }}>{project.name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Card.Text><strong>Technologies:</strong> {project.technologies}</Card.Text>
              {project.link && (
                <Button variant="primary" href={project.link} target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>
                  View Project
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}



export default Projects;