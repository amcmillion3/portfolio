import React from "react";

export default function ProjectDetailLayout(props) {
    return(
        <div className="m-10 text-tokyo-lavender" key={props.title}>
            <header>
                <h1 className="text-5xl">{props.title}</h1>
            </header>
            <div className="flex mt-10">
                <div className="w-1/2">
                    <img src={`${props.video}`} alt={`video of ${props.title}`} />
                </div>
                <div className="w-1/2 pl-10 pr-64">
                    <ul>
                        <li className="mt-5">{props.description}</li>
                        <li className="mt-10">{props.learning}</li>
                        <li className="mt-10">{props.skills}</li>
                    </ul>
                    <div className="flex justify-around mt-10 w-full">
                        <a href={props.live} className="border-2 rounded border-tokyo-lavender p-2">Live Demo</a>
                        <a href={props.github} className="border-2 rounded border-tokyo-lavender p-2">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}