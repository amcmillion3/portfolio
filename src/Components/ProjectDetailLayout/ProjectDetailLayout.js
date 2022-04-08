import React from "react";

export default function ProjectDetailLayout(props) {
    return(
        <div key={props.title}>
            <header>
                <h1>{props.title}</h1>
            </header>
            <div>
                <div>
                    <ul>
                        <li>{props.description}</li>
                        <li>{props.learning}</li>
                        <li>{props.skills}</li>
                    </ul>
                    <a href={props.live}>Live Demo</a>
                    <a href={props.github}>Github</a>
                </div>
                <div>
                    <img src={`${props.video}`} alt={`video of ${props.title}`} />
                </div>
            </div>
        </div>
    )
}