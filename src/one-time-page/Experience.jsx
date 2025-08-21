
function Experience(props) {
  return (
    <div className="bg-[#192F6B] hover:border-2 hover:border-[#518AD5] rounded-lg mr-10 mt-7">
        <div className="flex justify-between px-7 ">
            <h3 className="font-bold text-2xl pt-3 pb-2">{props.senior}</h3>
            <h4 className="text-[#518AD5] pt-5">{props.date}</h4>
        </div>
        <h4 className="pl-7 text-[#788294] font-medium ">{props.tech}</h4>
        <p className="pl-7 pb-5 ">{props.title}</p>
    </div>
  )
}

export default Experience