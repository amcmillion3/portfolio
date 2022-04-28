import React from "react";
import Projects from "../Projects";
import './Layout.scss';

function Layout(props) {

    return (
        <div>
            <nav>
                <div>Icon</div>
                <div className="links-container">
                    <div>About</div>
                    <div>Projects</div>
                    <div>Contact</div>
                    <button>Resume</button>
                </div>
            </nav>
            <div className="main-container">
                <div className="core-content">
                    <section className="hero">
                        <div className="hero-1">
                            <h1>Hi, I am</h1>
                        </div>
                        <div className="hero-2">
                            <h2>Andrew McMillion</h2>
                        </div>
                        <div className="hero-3">
                            <h3>I am a Web Developer</h3>
                        </div>
                        <div className="hero-4">
                            <p>I am a Front-End Web Developer who strives to build exceptional websites. I am currently freelancing as I pursue a career as a professional developer.</p>
                        </div>
                        <div className="hero-5">
                            <p>If you are in search of a competent, hard-working developer for any ongoing projects or to join your team please contact me at amcmillion3@gmail.com</p>
                        </div>
                    </section>
                    <section className="about">
                        <h2>About Me</h2>
                        <div className="about-content">
                            <div className="about-bio">
                                <p>Hello! My name is Andrew and I am a web developer. I studied Mathematics at University and first became interested in programming when I took a course on programming for mathematics that was focused on developing algorithms to solve mathematical problems. Now that interest has grown to spending the vast majority of my time learning about and building things for the internet.</p>
                                <p>My current focus is building large full stack applications in order to grow and hone my skills. I am also reaching out into my community and working to improve local businesses by building for them, fully functional websites that will allow them to attract more customers and grow their businesses.</p>
                                <p>I am a voracious learner and I love tackling difficult projects that expand my knowledge and challenge me intellectually.</p>
                            </div>
                            <div className="photo">
                                <div>This is where my photo will go.</div>
                            </div>
                            <div className="skills">
                                <p>Here are the technologies that I know:</p>
                                <div className="skills-icons">
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
                    <section className="projects">
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
                <div className="social-links">
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