"use client";

import { CreativeHero } from "@/components/CreativeHero";
import { PortfolioNavBar } from "@/components/PortfolioNavBar";
import { ProjectGrid } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  // Project data based on Chiara's resume
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A captivating personal website utilizing frontend technologies including HTML5 and CSS3 to showcase education, skillset, experience, and ongoing projects.",
      image: "/portfolio-project.jpg",
      tags: ["HTML5", "CSS3", "Responsive Design"],
      link: "https://njit-wis.github.io/midterm-portfolio-cdasilvasantos/docs/index.html",
      github: "https://github.com/cdasilvasantos",
    },
    {
      title: "LuxCore Steakhouse Website",
      description: "A visually appealing and user-friendly website for LuxCore Steakhouse, integrating Next.js and utilizing Git for project management.",
      image: "/luxcore.jpg",
      tags: ["Next.js", "Git", "Web Design"],
      link: "https://is218-group-project-bay.vercel.app/#contact-us",
      github: "https://github.com/cdasilvasantos",
    },
    {
      title: "GoSwim Website",
      description: "A website focused on delivering comprehensive swimming lessons and techniques, utilizing HTML and CSS with deployment through GitHub Pages.",
      image: "/goswim.jpg",
      tags: ["HTML", "CSS", "GitHub Pages"],
      link: "https://cdasilvasantos.github.io/GoSwim/goswim.html",
      github: "https://github.com/cdasilvasantos",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#e7e3f1] text-gray-800">
      <PortfolioNavBar 
        navItems={[
          { name: "Home", url: "/" },
          { name: "About", url: "#about" },
          { name: "Projects", url: "#projects" },
          { name: "Experience", url: "#experience" },
          { name: "Contact", url: "#contact" },
        ]}
        logo={{
          url: "/",
          title: ""
        }}
        ctaButton={{
          text: "Contact Me",
          url: "#contact"
        }}
      />
      
      <CreativeHero
        badge="Web & Information Systems"
        title="Chiara daSilva Santos"
        subtitle="Web Developer and Information Systems Professional with Experience in HTML, CSS, Java, Python, and Next.js."
        actions={[
          {
            label: "View Projects",
            href: "#projects",
            variant: "default"
          },
          {
            label: "Contact Me",
            href: "#contact",
            variant: "outline"
          }
        ]}
      />

      <section id="about" className="py-20 bg-[#e7e3f1]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-lg text-gray-600 mb-6">
              I'm a Bachelor of Science in Web and Information Systems student at New Jersey Institute of Technology, graduating in May 2025. 
              I'm passionate about creating user-friendly web experiences and solving complex problems through technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Technical Skills</h3>
              <p className="text-gray-600">
                HTML, CSS, Java, Python, Next.js, Linux, Bash Scripting, Docker, CI/CD Pipeline, Git, GitHub, GitHub Actions, SQL, Microsoft 365, Google Workspace, Figma, Playwright, Apple iWork Suite
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Soft Skills</h3>
              <p className="text-gray-600">
                Project Management, Team Collaboration, Time Management, Problem Solving, Communication
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Education</h3>
              <p className="text-gray-600">
                New Jersey Institute of Technology<br />
                Bachelor of Science in Web and Information Systems<br />
                Graduating: May 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Projects</h2>
            <p className="text-lg text-gray-600">
              A showcase of my web development and design projects.
            </p>
          </div>
          
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <section id="experience" className="py-20 bg-[#e7e3f1]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Professional Experience</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Location Manager</h3>
                <div className="text-gray-600">
                  <span className="text-sm">British Swim School of North New Jersey</span>
                  <p className="text-sm">Oct 2023 – present | Kearny, NJ</p>
                </div>
              </div>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Interview, hire, onboard, and manage employees to maintain a smooth execution of daily aquatics and service operations.</li>
                <li>Creation of employee schedules, and pool lesson schedules.</li>
                <li>Address and document employee, customer, and pool incidents that occur.</li>
                <li>Teach and lead swimming lessons as needed.</li>
                <li>Train incoming swim instructors and hold monthly training sessions for current instructors.</li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Instructor Trainer</h3>
                <div className="text-gray-600">
                  <span className="text-sm">British Swim School of Hudson Waterfront</span>
                  <p className="text-sm">Nov 2021 – Oct 2023 | Jersey City, NJ</p>
                </div>
              </div>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Offer swimming instruction to children and adults.</li>
                <li>Provide training to incoming swim instructors.</li>
                <li>Learn and execute the curriculum created for swim instruction.</li>
                <li>Ensure current instructors are upholding lesson plan structures.</li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Assistant Manager</h3>
                <div className="text-gray-600">
                  <span className="text-sm">Burger King</span>
                  <p className="text-sm">Jul 2019 – Nov 2021 | Kearny, NJ</p>
                </div>
              </div>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Manage daily operations of the restaurant.</li>
                <li>Master POS systems to handle payments from $3000 to $5000 per shift.</li>
                <li>Maintain inventory, manage labor, and apply financial reporting analysis to enhance restaurant results.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      
      <footer className="bg-white/80 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold text-gray-800">
                Chiara daSilva Santos
              </span>
              <p className="mt-2 text-gray-600 max-w-md">
                Web developer and Information Systems Professional based in Kearny, NJ.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/cdasilvasantos" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="mailto:chiara.dasilvasantos@gmail.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                <span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="tel:2017190215" className="text-gray-600 hover:text-gray-800 transition-colors">
                <span className="sr-only">Phone</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p> 2025 Chiara daSilva Santos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
