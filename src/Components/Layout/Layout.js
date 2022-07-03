import React from "react";
import Projects from "../Projects";
import Nav from "../Nav";

function Layout(props) {

    return (
        <div id="home">
            <Nav/>
            <div className="flex flex-col lg:justify-between lg:flex-row-reverse text-tokyo-lavender">
                <div className="lg:w-1/2 lg:mr-[25%]">
                    <section className="mt-20 ml-10 mr-10">
                        <div>
                            <h1 className="text-2xl lg:text-3xl text-tokyo-cyan lg:m-0">Hi, I am</h1>
                        </div>
                        <div>
                            <h2 className="text-4xl mt-3 lg:text-8xl lg:mt-5 text-tokyo-dark-purple font-serif">Andrew McMillion</h2>
                        </div>
                        <div>
                            <h3 className="text-xl mt-3 lg:text-6xl lg:mt-5 font-serif">Developer | Builder | Learner</h3>
                        </div>
                        <div>
                            <p className="text-xl mt-3 lg:w-2/3 lg:leading-8 lg:mt-10">I am a Full-Stack Web Developer who strives to build exceptional websites. I am currently freelancing as I pursue a career as a professional developer.</p>
                        </div>
                        <div>
                            <p className="text-xl mt-3 lg:w-2/3 lg:leading-8 lg:mt-10">If you are in search of a competent, hard-working developer for any ongoing projects or to join your team please contact me at amcmillion3@gmail.com</p>
                        </div>
                    </section>
                    <section className="mt-60 ml-10 mr-10 lg:mt-80">
                        <h2 className="text-4xl text-tokyo-cyan" id="about">About Me</h2>
                        <div className="mt-10 lg:grid lg:grid-cols-2 lg:row-auto">
                            <div>
                                <p className="text-xl lg:w-full lg:leading-8 lg:mt-2">Hello! My name is Andrew and I am a web developer. I studied Mathematics at the University of South Florida and first became interested in programming when I took a course on programming for mathematics that was focused on developing algorithms to solve mathematical problems. Now that interest has grown to spending the vast majority of my time learning about and building things for the internet.</p>
                                <p className="text-xl mt-10 lg:w-full lg:leading-8 lg:mt-6">My current focus is building large full stack applications in order to grow and hone my skills. I am also reaching out into my community and working to improve local businesses by building for them, fully functional websites that will allow them to attract more customers and grow their businesses.</p>
                                <p className="text-xl mt-10 lg:w-full lg:leading-8 lg:mt-6">I am a voracious learner and I love tackling difficult projects that expand my knowledge and challenge me intellectually.</p>
                            </div>
                            <div>
                                <div className="m-5 lg:m-10 lg:mt-40">
                                    <img alt="headshot" src="https://avatars.githubusercontent.com/u/30482613?v=4" />
                                </div>
                            </div>
                            <div className="lg:col-span-2">
                                <p className="text-xl lg:w-full lg:leading-8 lg:mt-6">Here are a few of the technologies that I use:</p>
                                <div className="flex flex-wrap justify-around mt-4 w-full">
                                    <img align="left" alt="Visual Studio Code" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                                    <img align="left" alt="HTML5" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                                    <img align="left" alt="CSS3" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                                    <img align="left" alt="TailwindCSS" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                                    <img align="left" alt="Sass" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                                    <img align="left" alt="JavaScript" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                                    <img align="left" alt="React" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                    <img align="left" alt="Node.js" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                                    <img align="left" alt="MongoDB" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                                    <img align="left" alt="Git" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                                    <img align="left" alt="GitHub" width="50em" src="https://img.icons8.com/glyph-neue/344/ffffff/github.png" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mt-20 ml-10 mr-10" id="projects">
                        <h2 className="text-4xl text-tokyo-cyan">Projects</h2>
                        <Projects data={ props.data }/>
                    </section>
                    <section className="mt-20 ml-10 mr-10 mb-10" id="contact">
                        <h2 className="text-4xl text-tokyo-cyan">Contact Me</h2>
                        <form action="https://formsubmit.co/0c75666bfff8977270a32b804824f26f" method="POST">
                            <ul className="mt-10">
                                <li>
                                    <input className="rounded p-2 w-full text-[#040324] text-lg font-black" type="text" name="name" placeholder="Name" required />
                                </li>
                                <li>
                                    <input className="rounded p-2 mt-2 w-full text-[#040324] text-lg font-black" type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <textarea className="rounded p-2 mt-2 w-full h-48 text-[#040324] text-lg font-black" name="message" placeholder="Message" required ></textarea>
                                </li>
                            </ul>
                            <button className="text-xl text-tokyo-cyan border-2 rounded border-tokyo-cyan p-2 mt-2 hover:scale-110 hover:bg-tokyo-cyan hover:bg-opacity-10 hover:delay-100" type="submit">Submit</button>
                        </form>
                    </section>
                </div>
                <div className="mt-10 lg:mt-[50%] lg:ml-4">
                    <ul className="flex justify-center lg:sticky lg:top-[50%] lg:flex-col">
                        <li className="m-2"><a href="https://github.com/amcmillion3">
                            <img className="hover:scale-110" align="left" alt="GitHub" width="60em" src="https://img.icons8.com/glyph-neue/344/ffffff/github.png" /></a></li>
                        <li className="m-2"><a href="https://twitter.com/McMillionMedia">
                            <img className="hover:scale-110" align="left" alt="Twitter" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" /></a></li>
                        <li className="m-2"><a href="https://www.linkedin.com/in/andrew-mcmillion-120384233/">
                            <img className="hover:scale-110" align="left" alt="Linkedin" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a></li>
                        <li className="m-2"><a href="https://www.youtube.com/channel/UC-xuUJCVG911tpxaGWSYONQ">
                            <img className="hover:scale-110" align="left" alt="Youtube" width="50em" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-128.png" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Layout;