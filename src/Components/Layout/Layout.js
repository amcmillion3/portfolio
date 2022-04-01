import React from "react";
import Projects from "../Projects";

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
                        <div>
                            <h1>Hi, I am</h1>
                        </div>
                        <div>
                            <h2>Andrew McMillion</h2>
                        </div>
                        <div>
                            <h3>I am a Web Developer</h3>
                        </div>
                        <div>
                            <p>I am a Front-End Web Developer who strives to build exceptional websites. I am currently freelancing as I pursue a career as a professional developer.</p>
                        </div>
                        <div>
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
                                <div className="skills-icons">This is the div that will contain all the skills icons.</div>
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