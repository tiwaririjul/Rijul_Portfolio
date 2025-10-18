import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <section
      id="hero"
      className="pb-28 pt-24 sm:pt-28 md:pt-44 px-6 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-zinc-900 dark:text-zinc-100">
          <h2 className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">{user_info.main.role}</h2>
          <h1 className="font-black mt-3 text-5xl lg:text-6xl">
            {user_info.main.name}
          </h1>

          <div className="mt-8 dark:text-zinc-300 text-base font-light leading-8">
              <p className="mb-4">
                I'm <span className="font-semibold text-red-600 dark:text-red-400">Rijul Tiwari</span>, an <span className="font-semibold text-blue-600 dark:text-blue-400">experienced Full Stack Web Developer</span> from Mumbai, India, and I graduated with honors in <span className="font-semibold text-green-600 dark:text-green-400">Information Technology and Artificial Intelligence</span> in 2024.
              </p>
              
              <p className="mb-4">
                I have experience in building <span className="font-semibold text-purple-600 dark:text-purple-400">complete web applications from start to finish</span>, all by myself — from frontend to backend and deployment. I can develop and scale <span className="font-semibold text-orange-600 dark:text-orange-400">full-fledged web applications</span> that follow industry best practices and use modern technologies like <span className="font-semibold text-cyan-600 dark:text-cyan-400">React, Next.js, Node.js, Express.js, Redis, and MongoDB</span>.
              </p>
              
              <p className="mb-4">
                I have also built and scaled a web application that handled <span className="font-semibold text-red-600 dark:text-red-400">more than 6,000 concurrent users</span> efficiently. I have worked on <span className="font-semibold text-indigo-600 dark:text-indigo-400">CRM systems and freelance projects</span>, solving real-world problems using <span className="font-semibold text-pink-600 dark:text-pink-400">high-level system design and clean, optimized code</span>.
              </p>
              
              <p className="mb-4">
                With a strong understanding of <span className="font-semibold text-yellow-600 dark:text-yellow-400">Java and Object-Oriented Programming (OOP)</span>, I focus on writing <span className="font-semibold text-teal-600 dark:text-teal-400">maintainable and scalable code</span>. I also have knowledge of <span className="font-semibold text-lime-600 dark:text-lime-400">Docker, Git, and GitHub</span> for cloud deployment and version control.
              </p>
              
              <p>
                I enjoy solving <span className="font-semibold text-rose-600 dark:text-rose-400">complex problems</span>, designing <span className="font-semibold text-violet-600 dark:text-violet-400">scalable systems</span>, and learning how big tech companies build and grow their applications. My goal is to create <span className="font-semibold text-emerald-600 dark:text-emerald-400">high-quality digital products</span> that are fast, reliable, and easy to scale.
              </p>
            </div>

          <div className="flex gap-4 mt-10">
            <a
              href="#projects"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white dark:text-red-400 dark:border-red-400 dark:hover:bg-red-400 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 hover:gap-3"
            >
              <span>Get In Touch</span>
              <IoIosArrowForward className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
