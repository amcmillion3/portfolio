import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
    return(
        <div key={props.title} className="project-card">
            <Link to={`/projects/${props.title}`}>
                <img className="project-image" src={`${props.image}`} alt={`${props.title}`} />
            </Link>
        </div>
    )
}

export default ProjectCard;