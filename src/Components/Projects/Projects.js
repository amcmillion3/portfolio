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
        <div className="flex flex-col mt-10 items-center lg:grid lg:grid-cols-3 lg:grid-rows-2">
            {renderProjectsList()}
        </div>
    )
}

export default Projects;