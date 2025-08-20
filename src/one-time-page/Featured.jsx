function Featured({project}){
  return <div>
    <div className="bg-[#1C2B50] w-96 rounded-t-md hover:scale-105 duration-300 transition-all hover:border-2 hover:border-[#294370] hover:rounded-lg rounded-lg ">
      <img className="w-96 h-56 rounded-t-md pb-3  " src={project.images} alt="" />
      <h3 className="font-bold text-2xl ml-3 pb-3">{project.website}</h3>
      <p className="ml-3 pb-3">{project.paragraph}</p>
      <div className="flex gap-4 pb-7">
        <h4 className="bg-[#294370] px-2  py-2 ml-3 rounded-lg ">{project.title1}</h4>
        <h4 className="bg-[#294370] px-2  py-2 ml-3 rounded-lg ">{project.title2}</h4>
        <h4 className="bg-[#294370] px-2  py-2 ml-3 rounded-lg ">{project.title3}</h4>
      </div>
    </div>

  </div>
}

export default Featured