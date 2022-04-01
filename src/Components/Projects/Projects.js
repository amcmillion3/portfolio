import React from "react";
import ProjectCard from "../ProjectCard";

function Projects(props) {

    function renderProjectsList() {
        const projects = props.data.map((project) => (
            <ProjectCard
                key = {project.title}
                title = {project.title}
                image = {project.image}
            />
        ));
        return projects;
    };

    return(
        <div className="project-list">
            {renderProjectsList()}
        </div>
    )
}

export default Projects;