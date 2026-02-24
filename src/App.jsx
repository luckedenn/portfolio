import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div
        className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1"
        id="home"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Turning ideas into systems, and systems into impact.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, I'm Lucas Chandra
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            A Computer Science graduate who enjoys building intelligent and
            scalable solutions. I work across data, software, and machine
            learning to transform complex problems into practical systems. I’m
            passionate about creating technology that is not only functional,
            but meaningful and impactful.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/assets/CV-Lucas Chandra.pdf"
              download="CV-Lucas Chandra.pdf"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#projects"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              View Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-125 md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
        />
      </div>

      {/* about */}
      <div className="tentang mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <p className="text-base/loose mb-8">
            I'm a Computer Science graduate with a strong foundation in
            analytical thinking and problem solving. Throughout my academic and
            project experience, I have worked on various technology driven
            solutions ranging from data analysis and machine learning models to
            system design and application development. These experiences
            strengthened my ability to understand complex problems, structure
            solutions, and translate ideas into practical systems. I am highly
            motivated to learn, adapt, and contribute in dynamic environments,
            whether in technical roles or broader business-oriented programs.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-slate-700/30 border border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-slate-200 transition-all duration-300 hover:scale-105">
              Problem Solving
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-slate-700/30 border border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-slate-200 transition-all duration-300 hover:scale-105">
              Analytical Mindset
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-slate-700/30 border border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-slate-200 transition-all duration-300 hover:scale-105">
              System Thinking
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-slate-700/30 border border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-slate-200 transition-all duration-300 hover:scale-105">
              Continuous Learning
            </span>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools I Use
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Below are the Tools & Technologies I've Used
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className={`${tool.width ? tool.width : "w-14"} bg-zinc-800 p-1 group-hover:bg-zinc-900`}
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* about */}

      {/* Projects */}
      <div className="proyek mt-32 py-10" id="projects">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Projects
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Here are some projects I've created
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-400 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={proyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Projects */}

      {/* Contact */}
      <div className="Kontak mt-32 sm:p-10 p-0" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl mb-4 font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Let's Connect
          </h1>
          <p
            className="text-base/loose mb-12 opacity-60"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Feel free to reach out through any of the platforms below. I'm
            always open to new opportunities and collaborations.
          </p>

          <div
            className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=lucaschandra18@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110 group"
              title="Send me an email"
            >
              <i className="ri-mail-line ri-2x text-blue-400 mb-1 group-hover:text-blue-300 transition-colors"></i>
              <span className="text-xs font-medium text-blue-300 opacity-80">
                Email
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lucaschandra/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-110 group"
              title="Visit my LinkedIn"
            >
              <i className="ri-linkedin-box-line ri-2x text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors"></i>
              <span className="text-xs font-medium text-cyan-300 opacity-80">
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/luckedenn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-slate-500/10 border border-slate-500/30 hover:bg-slate-500/20 hover:border-slate-400 hover:shadow-lg hover:shadow-slate-500/20 transition-all duration-300 hover:scale-110 group"
              title="Visit my GitHub"
            >
              <i className="ri-github-fill ri-2x text-slate-300 mb-1 group-hover:text-slate-200 transition-colors"></i>
              <span className="text-xs font-medium text-slate-300 opacity-80">
                GitHub
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/lucas_chndra/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-pink-500/10 border border-pink-500/30 hover:bg-pink-500/20 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-110 group"
              title="Visit my Instagram"
            >
              <i className="ri-instagram-line ri-2x text-pink-400 mb-1 group-hover:text-pink-300 transition-colors"></i>
              <span className="text-xs font-medium text-pink-300 opacity-80">
                Instagram
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact */}
    </>
  );
}

export default App;
