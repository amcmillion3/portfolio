import React from "react";
import { useParams, Link } from "react-router-dom";
import ProjectDetailLayout from "../ProjectDetailLayout";

export default function ProjectDetail(props) {
    const { id } = useParams();

    function renderProjectDetail() {
        const productDetails = props.data.filter(item => item.title === id).map((item) =>(
            <ProjectDetailLayout 
            key = {item.title}
            title = {item.title}
            description = {item.description}
            learning = {item.learning}
            skills = {item.skills}
            live = {item.live}
            github = {item.github}
            video = {item.video}
            />
        ))
        return productDetails;
    }

    return (
        <div>
            <div>Icon</div>
            {renderProjectDetail()}
            <div>
            <Link to={`/`}>
                <button>Go Back</button>
            </Link>
            </div>
        </div>
    )
}