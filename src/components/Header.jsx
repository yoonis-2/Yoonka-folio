import { NavLink } from "react-router-dom"

function Header() {
  return (
    <div className=" bg-[#10192F] text-white  flex justify-between px-10 py-3">
        <h1 className="font-bold text-2xl">🚀 Yoonka-code</h1>
            <ul className="flex gap-14 text-xl py-1">
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/project"><li>Project</li></NavLink>
                <NavLink to="/Contacts"><li>Contact</li></NavLink>
            </ul>
    </div>
  )
}

export default Header
