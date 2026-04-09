import { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiRender,
  SiFigma,
  SiGooglecloud,
  SiJavascript,
  SiOpenai,
  SiGithubcopilot,
  SiFacebook,
  SiInstagram,
  SiThreads,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";
import { FaUpwork } from "react-icons/fa6";
import { BsTrello } from "react-icons/bs";
import { PiMicrosoftWordLogo, PiMicrosoftPowerpointLogo, PiMicrosoftExcelLogo } from "react-icons/pi";


export default function Services() {
  const [active, setActive] = useState("fullstack");

  return (
    <div id="services" className="relative bg-gray-900 w-full min-h-dvh lg:h-[130vh] flex flex-col items-center px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-200 mb-8 pt-20">Services</h1>

      {/* div for menu and content  box */}
      <div className="w-full max-w-4xl flex flex-col items-center pb-30">

        {/* content menu */}
        <nav className="flex w-full overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActive("fullstack")}
            className={`border border-gray-600 px-9 py-4 rounded-l-xl text-gray-400 transition whitespace-nowrap
              hover:bg-orange-600 hover:text-white
              ${active === "fullstack" ? "bg-orange-600 text-white" : ""}
            `}
          >
            Full Stack Development
          </button>

          <button
            onClick={() => setActive("va")}
            className={`border border-gray-600 px-9 py-4 text-gray-400 transition whitespace-nowrap
              hover:bg-orange-600 hover:text-white
              ${active === "va" ? "bg-orange-600 text-white" : ""}
            `}
          >
            Virtual Assistance
          </button>

          <button
            onClick={() => setActive("moderation")}
            className={`border border-gray-600 px-9.5 py-4 text-gray-400 transition whitespace-nowrap
              hover:bg-orange-600 hover:text-white
              ${active === "moderation" ? "bg-orange-600 text-white" : ""}
            `}
          >
            Content Moderation
          </button>

          <button
            onClick={() => setActive("customer")}
            className={`border border-gray-600 px-9 py-4 rounded-r-xl text-gray-400 transition whitespace-nowrap
              hover:bg-orange-600 hover:text-white
              ${active === "customer" ? "bg-orange-600 text-white" : ""}
            `}
          >
            Customer Service
          </button>
        </nav>

        {/* content box */}
        <div className="mt-6 w-full bg-gray-800 border border-gray-700 rounded-xl p-6 text-gray-200 shadow-xl transition-all">
          {active === "fullstack" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Full Stack Development</h2>
              <p className="text-gray-400">
                I build modern, scalable web applications using the MERN stack, REST APIs,
                authentication systems, dashboards, and responsive UI/UX.
              </p>
              <ul className="list-disc p-4 text-gray-400 ">
                <li className="mt-1">RESTful API design and integration</li>
                <li className="mt-1">Authentication: JWT, OAuth</li>
                <li className="mt-1">Dashboard and admin panel development</li>
                <li className="mt-1">Responsive design with Bootstrap or Tailwind CSS</li>
              </ul>
              <div className="flex flex-col items-center mt-6">

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-gray-200 mb-8">
                  My MERN Stack Tools
                </h3>

                {/* LOGO ROW */}
                <div className="flex flex-wrap justify-center gap-10 text-gray-300">

                  {/* HTML */}
                  <div className="flex flex-col items-center">
                    <FaHtml5 className="text-orange-500 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">HTML5</span>
                  </div>

                  {/* CSS */}
                  <div className="flex flex-col items-center">
                    <FaCss3Alt className="text-blue-500 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">CSS3</span>
                  </div>

                  {/* Bootstrap */}
                  <div className="flex flex-col items-center">
                    <FaBootstrap className="text-purple-600 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Bootstrap</span>
                  </div>

                  {/* Tailwind */}
                  <div className="flex flex-col items-center">
                    <SiTailwindcss className="text-cyan-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">TailwindCSS</span>
                  </div>

                  {/* Git */}
                  <div className="flex flex-col items-center">
                    <FaGitAlt className="text-orange-600 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Git</span>
                  </div>

                  {/* GitHub */}
                  <div className="flex flex-col items-center">
                    <FaGithub className="text-white text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">GitHub</span>
                  </div>

                  {/* Vercel */}
                  <div className="flex flex-col items-center">
                    <SiVercel className="text-white text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Vercel</span>
                  </div>

                  {/* JavaScript */}
                  <div className="flex flex-col items-center">
                    <SiJavascript className="text-yellow-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">JavaScript</span>
                  </div>

                  {/* Node.js */}
                  <div className="flex flex-col items-center">
                    <FaNodeJs className="text-green-500 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Node.js</span>
                  </div>

                  {/* Express */}
                  <div className="flex flex-col items-center">
                    <SiExpress className="text-gray-300 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Express.js</span>
                  </div>

                  {/* MongoDB */}
                  <div className="flex flex-col items-center">
                    <SiMongodb className="text-green-600 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">MongoDB</span>
                  </div>

                  {/* Postman */}
                  <div className="flex flex-col items-center">
                    <SiPostman className="text-orange-500 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Postman</span>
                  </div>

                  {/* Render */}
                  <div className="flex flex-col items-center">
                    <SiRender className="text-blue-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Render</span>
                  </div>

                  {/* React */}
                  <div className="flex flex-col items-center">
                    <FaReact className="text-blue-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">React.js</span>
                  </div>

                  {/* Google Workspace */}
                  <div className="flex flex-col items-center">
                    <SiGooglecloud className="text-blue-500 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Google Workspace</span>
                  </div>

                  {/* Figma */}
                  <div className="flex flex-col items-center">
                    <SiFigma className="text-pink-500 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Figma</span>
                  </div>

                  {/* ChatGPT */}
                  <div className="flex flex-col items-center">
                    <SiOpenai className="text-green-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">ChatGPT</span>
                  </div>

                  {/* Copilot */}
                  <div className="flex flex-col items-center">
                    <SiGithubcopilot className="text-blue-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Copilot</span>
                  </div>

                  {/* MS Visual Studio*/}
                  <div className="flex flex-col items-center">
                    <DiVisualstudio className="text-blue-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">MS Visual Studio</span>
                  </div>


                </div>
              </div>


            </div>
          )}

          {active === "va" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Virtual Assistance</h2>
              <p className="text-gray-400">
                I support clients with research, basic administrative tasks, and light graphic editing. I’ve worked with one client where I handled online research, simple content updates, and visual edits. I’m also comfortable with customer support and I’m highly willing to be trained in email management, scheduling, and workflow tools as I continue growing my skills as a virtual assistant.
              </p>
              <div className="flex flex-col items-center mt-6">
                {/* TITLE */}
                <h3 className="text-xl font-semibold text-gray-200 mt-5 mb-8">
                  My Tools
                </h3>

                {/* LOGO ROW */}
                <div className="flex flex-wrap justify-center gap-10 text-gray-300">

                  {/* ChatGPT */}
                  <div className="flex flex-col items-center">
                    <SiOpenai className="text-green-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">ChatGPT</span>
                  </div>

                  {/* Microsoft Copilot */}
                  <div className="flex flex-col items-center">
                    <SiGithubcopilot className="text-blue-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Microsoft Copilot</span>
                  </div>

                  {/* Trello */}
                  <div className="flex flex-col items-center">
                    <BsTrello className="text-blue-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Trello</span>
                  </div>

                  {/* Upwork */}
                  <div className="flex flex-col items-center">
                    <FaUpwork className="text-blue-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Upwork</span>
                  </div>

                  {/* Microsoft Word */}
                  <div className="flex flex-col items-center">
                    <PiMicrosoftWordLogo className="text-blue-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Microsoft Word</span>
                  </div>

                  {/* Microsoft PowerPoint */}
                  <div className="flex flex-col items-center">
                    <PiMicrosoftPowerpointLogo className="text-blue-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Microsoft PowerPoint</span>
                  </div>

                  {/* Microsoft Excel */}
                  <div className="flex flex-col items-center">
                    <PiMicrosoftExcelLogo className="text-blue-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Microsoft Excel</span>
                  </div>

                </div>

              </div>
            </div>
          )}

          {active === "moderation" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Content Moderation</h2>
              <p className="text-gray-400">
                Experienced in high‑volume moderation, policy enforcement, quality checks,
                and maintaining safe online communities.
              </p>
              <div className="flex flex-col items-center mt-6">
                {/* TITLE */}
                <h3 className="text-xl font-semibold text-gray-200 mt-5 mb-8">
                  Platforms I've Moderated
                </h3>

                {/* LOGO ROW */}
                <div className="flex flex-wrap justify-center gap-10 text-gray-300">

                  {/* Facebook */}
                  <div className="flex flex-col items-center">
                    <SiFacebook className="text-blue-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Facebook</span>
                  </div>
                  {/* Instagram */}
                  <div className="flex flex-col items-center">
                    <SiInstagram className="text-pink-400 text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Instagram</span>
                  </div>
                  {/* Threads */}
                  <div className="flex flex-col items-center">
                    <SiThreads className="text-black text-4xl" />
                    <span className="text-xs mt-2 text-gray-400">Threads</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === "customer" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Customer Service</h2>
              <p className="text-gray-400">
                I deliver empathetic, efficient customer support through chat, email, and
                ticketing systems — ensuring clarity, satisfaction, and fast resolution.
              </p>
              <ul className="list-disc p-4 text-gray-400 ">
                <li>CRM and Admin Tools</li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}