function Home(){
    return <div className="bg-[linear-gradient(to_right,#111E3D,#193375)] text-white">
        <div className="flex justify-evenly pt-14 pb-20">
             {/* left */}
             <div>
                <h2 className="font-bold text-4xl pb-3">I'm Yoonis <span className="text-[#BE85FC]">Gallad</span></h2>
                <h4 className="pb-3 text-2xl font-medium">Frond-end Developer & UI/UX Designer</h4>
                <p className="pb-4">Passionate about creating beautiful, functional web applications <br /> 
                that solve real-world problems and deliver exceptional user <br /> experiences.</p>
                <div>
                    <button className="bg-blue-800 px-5 py-2 rounded-lg ">View My Work</button>
                    <button className=  "border-2 border-blue-800 px-5 py-2 rounded-lg ml-4">Get In Touch</button>
                </div>
             </div>
             {/* right */}
             <div>
                <img className="w-96 h-96 rounded-lg" src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
             </div>

        </div>

    </div>
}

export default Home