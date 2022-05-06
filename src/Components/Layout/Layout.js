import React from "react";
import Projects from "../Projects";

function Layout(props) {

    return (
        <div>
            <nav className="flex justify-between m-4 text-xl text-tokyo-cyan">
                <div>Icon</div>
                <div className="flex justify-around w-1/4">
                    <div>About</div>
                    <div>Projects</div>
                    <div>Contact</div>
                    <button>Resume</button>
                </div>
            </nav>
            <div className="flex justify-between flex-row-reverse text-tokyo-lavender">
                <div className="w-1/2 mr-[25%]">
                    <section className="mt-20">
                        <div>
                            <h1 className="text-3xl text-tokyo-cyan m-0">Hi, I am</h1>
                        </div>
                        <div>
                            <h2 className="text-8xl text-tokyo-dark-purple">Andrew McMillion</h2>
                        </div>
                        <div>
                            <h3 className="text-6xl m-0">I am a Web Developer</h3>
                        </div>
                        <div>
                            <p className="text-xl w-1/2">I am a Front-End Web Developer who strives to build exceptional websites. I am currently freelancing as I pursue a career as a professional developer.</p>
                        </div>
                        <div>
                            <p className="text-xl w-1/2">If you are in search of a competent, hard-working developer for any ongoing projects or to join your team please contact me at amcmillion3@gmail.com</p>
                        </div>
                    </section>
                    <section className="mt-60">
                        <h2>About Me</h2>
                        <div className="grid grid-cols-2 grid-rows-2">
                            <div>
                                <p className="w-3/4 leading-7">Hello! My name is Andrew and I am a web developer. I studied Mathematics at University and first became interested in programming when I took a course on programming for mathematics that was focused on developing algorithms to solve mathematical problems. Now that interest has grown to spending the vast majority of my time learning about and building things for the internet.</p>
                                <p className="w-3/4 leading-7">My current focus is building large full stack applications in order to grow and hone my skills. I am also reaching out into my community and working to improve local businesses by building for them, fully functional websites that will allow them to attract more customers and grow their businesses.</p>
                                <p className="w-3/4 leading-7">I am a voracious learner and I love tackling difficult projects that expand my knowledge and challenge me intellectually.</p>
                            </div>
                            <div>
                                <div>This is where my photo will go.</div>
                            </div>
                            <div className="col-span-2">
                                <p>Here are the technologies that I know:</p>
                                <div>
                                    <img align="left" alt="Visual Studio Code" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                                    <img align="left" alt="HTML5" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                                    <img align="left" alt="CSS3" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                                    <img align="left" alt="Sass" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                                    <img align="left" alt="JavaScript" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                                    <img align="left" alt="React" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                    <img align="left" alt="Node.js" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                                    <img align="left" alt="MongoDB" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                                    <img align="left" alt="Git" width="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                                    <img align="left" alt="GitHub" width="50em" src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2>Projects</h2>
                        <Projects data={ props.data }/>
                    </section>
                    <section>
                        <h2>Contact Me</h2>
                        <form>
                            <ul>
                                <li>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required ></textarea>
                                </li>
                            </ul>
                        </form>
                    </section>
                </div>
                <div className="flex flex-col justify-center">
                    <ul>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Youtube</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Layout;