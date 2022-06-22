import React from "react";
import { useState } from "react";

function Nav() {
    
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex justify-between lg:m-4 lg:text-xl text-tokyo-cyan">
          <div className="text-5xl m-4">A</div>
          <nav>
            <section className="flex mr-8 mt-6 lg:hidden">
              <div
                className="space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)} 
              >
                <span className="block h-1.5 w-10 animate-pulse bg-tokyo-cyan"></span>
                <span className="block h-1.5 w-10 animate-pulse bg-tokyo-cyan"></span>
                <span className="block h-1.5 w-10 animate-pulse bg-tokyo-cyan"></span>
              </div>
    
              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} 
                >
                  <svg
                    className="h-8 w-8 text-tokyo-cyan"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px] text-tokyo-cyan">
                  <li className="border-b border-gray-400 my-8 uppercase text-2xl">
                    <a href="#about">About</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase text-2xl">
                    <a href="#projects">Projects</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase text-2xl">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </section>
    
            <ul className="hidden space-x-8 lg:flex lg:pr-4 lg:text-4xl lg:mr-20 lg:mt-6 text-tokyo-cyan">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            right: 0;
            background: #1a1b26;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}</style>
        </div>
      );
}

export default Nav;