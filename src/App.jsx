import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex gap-6 md:gap-10">
            <a href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Portfolio</span>
            </a>
          </div>
          <nav className="flex items-center space-x-1">
            <a
              href="#about"
              className="px-4 py-2 text-sm font-medium hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#projects"
              className="px-4 py-2 text-sm font-medium hover:text-blue-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium hover:text-blue-400"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Hi, I'm <span className="text-blue-400">Pierre Freire</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  I'm a web developer specializing in building exceptional
                  digital experiences.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View My Work{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 h-4 w-4"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About Me
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  I'm a passionate web developer with a focus on creating clean,
                  user-friendly websites and applications. With expertise in
                  React and modern web technologies, I build solutions that are
                  both beautiful and functional.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-blue-900 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z"></path>
                      <polygon points="10 15 15 12 10 9"></polygon>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Frontend Development</h3>
                  <p className="text-sm text-gray-400">
                    Creating responsive and interactive user interfaces with
                    React.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-blue-900 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">UI/UX Design</h3>
                  <p className="text-sm text-gray-400">
                    Designing intuitive and visually appealing user experiences.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-blue-900 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                      <path d="m8 16 4-4 4 4"></path>
                      <path d="M8 16v4"></path>
                      <path d="M16 16v4"></path>
                      <line x1="12" y1="12" x2="12" y2="20"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Backend Integration</h3>
                  <p className="text-sm text-gray-400">
                    Connecting frontend applications with APIs and databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Projects
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Check out some of my recent work.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
                <ProjectCard
                  title="E-commerce Website"
                  description="A full-featured online store built with React and Stripe integration."
                  tags={["React", "Stripe", "Tailwind CSS"]}
                  imageUrl="https://placehold.co/600x400"
                />
                <ProjectCard
                  title="Task Management App"
                  description="A productivity application with drag-and-drop interface and real-time updates."
                  tags={["React", "Firebase", "Tailwind CSS"]}
                  imageUrl="https://placehold.co/600x400"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A responsive portfolio website showcasing creative work and projects."
                  tags={["React", "Framer Motion", "Tailwind CSS"]}
                  imageUrl="https://placehold.co/600x400"
                />
                <ProjectCard
                  title="Weather Dashboard"
                  description="A weather application with location-based forecasts and interactive maps."
                  tags={["React", "OpenWeather API", "Leaflet"]}
                  imageUrl="https://placehold.co/600x400"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get In Touch
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Have a project in mind or want to collaborate? Feel free to
                  reach out!
                </p>
              </div>
              <div className="mx-auto grid w-full max-w-3xl gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="h-6 w-6 text-blue-400"
                    />
                    <a
                      href="mailto:pierrefreire.profis@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      pierrefreire.profis@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="h-6 w-6 text-blue-400"
                    />
                    <a
                      href="https://linkedin.com/in/pierre-freire"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      linkedin.com/in/pierre-freire
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="h-6 w-6 text-blue-400"
                    />
                    <a
                      href="https://github.com/pierre-freire"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      github.com/pierre-freire
                    </a>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-800 py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            © {new Date().getFullYear()} Pierre Freire. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pierre-freire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="h-5 w-5 text-gray-400 hover:text-blue-400"
              />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/pierre-freire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-5 w-5 text-gray-400 hover:text-blue-400"
              />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:pierrefreire.profis@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-5 w-5 text-gray-400 hover:text-blue-400"
              />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
