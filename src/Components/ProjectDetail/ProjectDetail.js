import React from "react";
import { useParams, Link } from "react-router-dom";
import ProjectDetailLayout from "../ProjectDetailLayout";

function importAll(r) {
    return r.keys().map(r);
  }
  
  const icons = importAll(require.context('../../assets/icons', false, /\.(png|jpe?g|svg)$/));

export default function ProjectDetail(props) {
    const { id } = useParams();

    function renderProjectDetail() {
        const productDetails = props.data.filter(item => item.title === id).map((item) =>(
            <ProjectDetailLayout 
            key = {item.title}
            title = {item.title}
            description = {item.description}
            learning = {item.learning}
            live = {item.live}
            github = {item.github}
            video = {item.video}
            />
        ))
        return productDetails;
    }

    return (
        <div>
            <Link to={`/`}>
                <div className="m-4 text-tokyo-cyan">
                    <img src={`${icons[0]}`} alt="personal-icon" width={70}></img>
                </div>
            </Link>
            {renderProjectDetail()}
            <div>
            <Link className="text-tokyo-lavender" to={`/`}>
                <button className="text-xl border-2 rounded border-tokyo-lavender m-10 p-2 hover:scale-110 hover:bg-tokyo-cyan hover:bg-opacity-10 hover:delay-100">Go Back</button>
            </Link>
            </div>
        </div>
    )
}