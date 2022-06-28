import React from "react";
import { Link } from "react-router-dom";

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

function ProjectCard(props) {
    const link = props.image;

    return(
        <div key={props.title} className="project-card">
            <Link to={`/projects/${props.title}`}>
                <img className="project-image" src={`${images[link]}`} alt={`${props.title}`} />
            </Link>
        </div>
    )
}

export default ProjectCard;