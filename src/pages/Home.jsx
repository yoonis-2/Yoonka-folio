import { Link } from "react-router-dom"
import Data from "../components/Data"
import Boxes from "../one-time-page/Boxes"
import Featured from "../one-time-page/Featured"

function Home(){
    return <div className="bg-[linear-gradient(to_right,#111E3D,#193375)] h-[310vh] text-white">
        <div className=" text-center pt-24 pb-20">
             {/* left */}
             <div>
                <h2 className="font-bold text-5xl pb-3">I'm Yoonis <span className="text-[#BE85FC]">Gallad</span></h2>
                <h4 className="pb-3 text-2xl font-medium">Frond-end Developer & UI/UX Designer</h4>
                <p className="pb-4">Passionate about creating beautiful, functional web applications <br /> 
                that solve real-world problems and deliver exceptional user <br /> experiences.</p>
                <div>
                    <Link to="/view-work"><button className="bg-blue-800 px-5 py-2 rounded-lg ">View My Work</button></Link>
                    <button className=  "border-2 border-blue-800 px-5 py-2 rounded-lg ml-4">Get In Touch</button>
                </div>
             </div>
        </div>
        {/* section-2 */}
        <div className="text-center mt-14">
            <h3 className="font-bold text-5xl pb-3">About Me</h3>
            <p className="text-xl">I'm a passionate full-stack developer with a Bachelor's degree in Computer Science <br /> 
             and over 3 years of experience building modern web applications. I specialize in React, <br /> 
             Node.js, and creating user-centered digital experiences.</p>
        </div>
        {/* section-3 */}
        <div className="mt-16 flex justify-center gap-7">
            <Boxes icons="fa-solid fa-user font-bold text-5xl pb-4 ml-3 mt-4 text-[#60A5FA]" name="Experience" title="1+ years developing scalable web  applications and collaborating with cross-  functional teams"/>
            <Boxes icons="fa-solid fa-code font-bold text-5xl pb-4 ml-3 mt-4 text-[#60A5FA]" name="Skills" title="Expert in React, TypeScript, Node.js, Python, and modern development tools and practices."/>
            <Boxes icons="fa-solid fa-star-of-life font-bold text-5xl pb-4 ml-3 mt-4 text-[#60A5FA]" name="Passion" title="Dedicated to creating innovative solutions that solve real-world problems and enhance user experiences."/>
        </div>
        <div>
            <Link to="learn-more"><button className=" bg-[#60A5FA] px-5 py-2 rounded-lg mt-7 ml-[38%] font-medium text-xl text-white">Learn More About Me <i class="fa-solid fa-chevron-right pl-4"></i></button></Link>
        </div>
        <div className="text-center mt-16">
            <h3 className="font-bold text-3xl pb-3">Featured Projects</h3>
            <p className="text-[#D1D5DB] text-xl">Here are some of my recent projects that showcase my skills and passion for creating <br /> exceptional digital experiences.</p>
        </div>
        <div className=" mt-10 flex justify-center gap-7">
            {
                Data.slice(0,3).map((item) => {
                    return (
                        <Featured project={item}/>
                    )
                })
            }
        
        </div>
         <div className="ml-[43%]">
        <Link to="/view-all"><button className="bg-[linear-gradient(to_right,#2465E9,#0A8EB6)] px-5 py-2 rounded-lg mt-10">View All Project</button></Link>
      </div>


    </div>
}

export default Home