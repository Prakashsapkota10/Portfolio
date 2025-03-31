import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex space-x-4">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-indigo-600"
        >
          <Github size={20} className="mr-1" />
          <span>Code</span>
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-indigo-600"
          >
            <ExternalLink size={20} className="mr-1" />
            <span>Live</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
