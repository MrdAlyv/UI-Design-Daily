import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Avatar from "../assets/avatar.png"
import logo from "../assets/Logo.png"
const Nav = () => {
    return (
        <>
            <div >
                <div className="flex items-center justify-between px-24 py-10 ">
                    <div className="logo">
                        <img src={logo} alt="Logo" className="" />
                    </div>
                    <div className="flex gap-16 text-lg ">
                        <a href="#">Free designs</a>
                        <a href="#">License</a>
                        <a href="#">Articles</a>
                        <a href="#">Contributors</a>
                        <a href="#">About</a>
                    </div>
                    <div className="flex flex-row items-center gap-8">
                        <MdOutlineNotificationsNone className="w-8 h-8" />
                        <img src={Avatar} alt="Avatar" />
                        <button className="flex items-center gap-5 px-2 text-white border-r-4 w-44 h-14 bg-dark-blue rounded-xl "><IoCloudDownloadOutline className="w-6 h-6" />Payload</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Nav
