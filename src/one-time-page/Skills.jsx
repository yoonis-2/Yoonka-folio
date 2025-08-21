function Skills(props) {
  return (
    <div className="bg-[#1D2F5C] text-white w-72 rounded-lg h-[65vh] hover:border-2 hover:border-[#1E3986]">
        <h3 className="ml-5 pt-5 pb-4 font-bold text-3xl">{props.title}</h3>
        <p className="bg-[#283859] hover:bg-[#1E3986] ml-5 mr-5  px-10 py-2 rounded-lg mb-4">{props.one}</p>
        <p className="bg-[#283859] hover:bg-[#1E3986] ml-5 mr-5  px-10 py-2 rounded-lg mb-4">{props.two}</p>
        <p className="bg-[#283859] hover:bg-[#1E3986] ml-5 mr-5  px-10 py-2 rounded-lg mb-4">{props.three}</p>
    </div>
  )
}

export default Skills
