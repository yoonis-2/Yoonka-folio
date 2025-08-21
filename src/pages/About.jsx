import Experience from "../one-time-page/Experience"
import Skills from "../one-time-page/Skills"

function About() {
  return (
    <div className="bg-[linear-gradient(to_right,#101A34,#1E3A8A)] h-[320vh] text-white">
        <div className='ml-[30%] pt-14 pb-10'>
            <h3 className="font-bold text-4xl pb-4"><i class="fa-solid fa-user-secret"></i> Who I Am</h3>
            <p className="pb-6 font-medium ">My journey into technology began during my university years where I discovered <br /> the power of code to solve real-world problems. What started as curiosity quickly <br /> became a passion for building digital experiences that users love.</p>
            <p className="pb-6 font-medium ">Today, I specialize in full-stack development with a focus on modern web <br /> technologies. I believe in writing clean, maintainable code and creating <br /> applications that are not only functional but also delightful to use.</p>
            <p className="pb-6 font-medium ">When I'm not coding, you can find me exploring new technologies, contributing <br /> to open-source projects, or sharing knowledge with the developer community.</p>
        </div>
        {/* section-2 */}
       <div className="bg-[#1D3169] h-[50vh] m-10 rounded-lg">
          <h3 className="font-bold text-3xl pl-14 pt-6"><i class="fa-solid fa-graduation-cap text-[#4ADE80]"></i> Education</h3>
        <div className="bg-[#1D2D53] mt-5 ml-10 mr-10 rounded-lg">
          <h2 className="pt-4 pl-4 pb-2 font-bold text-2xl">Bachelor's Degree in Computer Science</h2>
          <h4 className="pl-4 pb-2 text-[#4B7FC3]">University of Technology • 2021-2026</h4>
          <p className="pl-4 pb-5">Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, database systems, and web <br /> development. Graduated with honors and completed a capstone project in machine learning applications.</p>
        </div>
       </div>
       {/* section-3 */}
       <div className="ml-10 pt-16">
        <h3 className="text-3xl font-bold "><i class="fa-solid fa-suitcase text-[#C084FC] "></i>  Professional Experiance</h3>
        <div>
          <Experience senior="Junior Frond-End Developer" date="2025 - present" tech="TechCorp Solutions" title="Lead development of enterprise-level web applications, mentoring junior developers, and implementing best practices for code quality and performance."/>
           <Experience senior="Junior Developer" date="2024 - 2025" tech="Digital Agency" title="Built websites and web applications for various clients, gained experience in multiple technologies and project management methodologies."/>

        </div>
       </div>
       {/* section-4 */}
       <div>
        <h3 className="text-3xl font-bold ml-10 pt-16"><i class="fa-solid fa-code text-[#0B8AB9]"></i> Skills & Expertise</h3>
        <div className="flex ml-10 gap-16 mt-10">
          <Skills title="Front-End" one="Html" two="Tailwind-Css" three="React"/>
          <Skills title="Back-End" one="Node.Js" two="Express.Js" three="MangoDB"/>
          <Skills title="Tools" one="Git" two="Github" three="Vs-Code" four="Vite"/>



        </div>
       </div>
    </div>
    
  )
}

export default About
