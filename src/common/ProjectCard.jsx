import React from 'react'

function ProjectCard({url, img, title, description}) {
  return (
    <a href={url} target="_blank">
        <img className="hover" src={img} alt={title + " logo"} />
        <h3>{title}</h3>
        <p>{description}</p>
    </a>
  );
} 

export default ProjectCard;