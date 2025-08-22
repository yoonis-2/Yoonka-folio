import { useState } from "react"
import Data from "../components/Data"
import Featured from "../one-time-page/Featured"

function Project() {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")

    const FilterData = Data.filter((data) => {
        const SearchData = data.website.toLowerCase().includes(search.toLowerCase())
        const CategoryData = category ? data.category === category : true
        return SearchData && CategoryData
    })
  return (
    <div className="bg-[linear-gradient(to_right,#111B35,#1E3A89)] text-white">
        <h3 className="text-3xl font-bold text-center pt-10 pb-3">My <span className="text-[#0B8CB8]">Project</span></h3>
        <p className="text-xl text-center pb-32">A showcase of my recent work, featuring web applications, mobile apps, and innovative solutions <br /> built with modern technologies.</p>
        <div className="flex gap-10 ml-5 mb-16">
            <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" className="bg-[#0B8CB8] text-white px-10 rounded-md py-2  border-none outline-none" />
            <div className="space-x-7 ml-3">
                <button onClick={() => setCategory("")} className="bg-[#0B8CB8] text-white px-4 py-2 rounded-lg">All</button>
                <button onClick={() => setCategory("Web")} className="bg-[#0B8CB8] text-white px-4 py-2 rounded-lg">Web</button>
                <button onClick={() => setCategory("E-commerce")} className="bg-[#0B8CB8] text-white px-4 py-2 rounded-lg ">E-commerce</button>
                <button onClick={() => setCategory("Dashboard")} className="bg-[#0B8CB8] text-white px-4 py-2 rounded-lg">Dashboard</button>
                 <button onClick={() => setCategory("Instagram-Dashboard")} className="bg-[#0B8CB8] text-white px-4 py-2 rounded-lg">Instagram-Dashboard</button>
                <button onClick={() => setCategory("Tools")} className="bg-[#0B8CB8] text-white px-4 py-2 rounded-lg">Tools</button>
                <button onClick={() => setCategory("Mobile-App")} className="bg-[#0B8CB8] text-white px-4 py-2 rounded-lg">Mobile-App</button>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 pb-10">
        {
            FilterData.length > 0 ?    FilterData.map((items) => {
                return <div>
                    <Featured project={items} />
                </div>
            })
            :
            <p className="font-bold text-7xl text-center"> <i class="fa-solid fa-folder-open"></i> Empty </p>
        }
        </div>
    </div>
  )
}
export default Project
