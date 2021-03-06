import React from "react";

function importAll(r) {
    return r.keys().map(r);
}

const gifs = importAll(require.context('../../assets/gifs', false, /\.(png|jpe?g|svg|gif)$/));

export default function ProjectDetailLayout(props) {

    const link = props.video;
    return(
        <div className="m-10 text-tokyo-lavender" key={props.title}>
            <header>
                <h1 className="text-3xl lg:text-5xl">{props.title}</h1>
            </header>
            <div className="flex flex-col lg:flex-row lg:mt-10">
                <div className="mt-10 lg:w-1/2">
                    <img src={`${gifs[link]}`} alt={`video of ${props.title}`} />
                </div>
                <div className="text-2xl lg:w-1/2 lg:pl-10 lg:pr-64">
                    <ul>
                        <li className="mt-5">{props.description}</li>
                        <li className="mt-10">{props.learning}</li>
                    </ul>
                    <div className="flex justify-around mt-10 w-full">
                        <a href={props.live} className="border-2 rounded border-tokyo-lavender p-2 hover:scale-110 hover:bg-tokyo-cyan hover:bg-opacity-10 hover:delay-100">Live Demo</a>
                        <a href={props.github} className="border-2 rounded border-tokyo-lavender p-2 hover:scale-110 hover:bg-tokyo-cyan hover:bg-opacity-10 hover:delay-100">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}