import React from 'react'
import cinecast from '../assets/cinecast.mp4'
import philbound2 from '../assets/philbound-mobile2.mp4'
import portfolio from '../assets/portfolio.mp4'

const Projects = () => {
    const projects = [
        {
            title: "Cinecast",
            src: cinecast,
            link: "https://movie-app-client-ebon-eta.vercel.app/",
            description: "A simple movie app design built with React. It doesn't have a backend, but this is a project I worked on to practice my frontend skills and design. It features a clean and modern UI, with a focus on user experience."
        },
        {
            title: "Philbound.ph",
            src: philbound2,
            link: "https://philbound.ph",
            description: "A real estate app where users can browse and search for properties, view details, and contact agents. Built with React and Tailwind CSS. I helped with the frontend development and design of the website."
        },
        {
            title: "Old Static Portfolio",
            src: portfolio,
            link: "https://jetherpaul17.github.io/webportfolio/",
            description: "A simple yet elegant portfolio website showcasing my work and skills."
        }
    ]

    return (
        <div id='projects' className="relative bg-orange-600 w-full min-h-dvh flex flex-col items-center justify-center px-4 py-10">

            <h1 className="text-4xl font-bold text-gray-200 mb-10 text-center">
                Projects
            </h1>

            <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-6 
                w-full 
                max-w-6xl 
                group
            ">
                {projects.map((proj, i) => (
                    <a
                        key={i}
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            bg-gray-200 rounded-lg p-3 
                            shadow-[0_4px_12px_rgba(0,0,0,0.4)]
                            transform transition-all duration-300
                            group-hover:scale-95 hover:scale-105 active:scale-95
                            hover:z-20 z-10
                            mx-auto w-full
                            cursor-pointer
                        "
                    >
                        <div className="w-full aspect-video overflow-hidden rounded mb-3">
                            <video
                                src={proj.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                            {proj.title}
                        </h2>

                        <p className="text-gray-900">
                            {proj.description}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects
