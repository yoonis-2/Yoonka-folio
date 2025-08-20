function Boxes(props) {
  return (
   <div className="bg-[#1A294B] w-96 h-52 rounded-lg hover:border-2 hover:border-[#182B61] hover:scale-105 transition-all duration-300 ">
    <i className={props.icons}></i>
    <h3 className="font-medium text-2xl pb-2 ml-5">{props.name}</h3>
    <p className="ml-5">{props.title}</p>
   </div>
  )
}

export default  Boxes
