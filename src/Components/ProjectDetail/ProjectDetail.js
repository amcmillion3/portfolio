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
            <div className="text-5xl m-4 text-tokyo-lavender">A</div>
            {renderProjectDetail()}
            <div>
            <Link className="text-tokyo-lavender" to={`/`}>
                <button className=" text-xl border-2 rounded border-tokyo-lavender m-10 p-2">Go Back</button>
            </Link>
            </div>
        </div>
    )
}