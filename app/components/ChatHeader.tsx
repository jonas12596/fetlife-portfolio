import Nav from "./Nav";
import { IoChevronBack } from "react-icons/io5";
import { PiInfoLight, PiSealCheckFill } from "react-icons/pi";

export default function ChatHeader() {
    return (<div className="mt-13.5 bg-[#1e1e1e]">
        <Nav />
        <div className="p-3 flex items-center justify-between border-b-[.5px] border-[#444]">
            <div className="flex items-center space-x-6">
                <IoChevronBack className="text-xl cursor-pointer text-white" />
                <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">Goddess Tiffany 🗽</span>
                    <PiSealCheckFill className="text-2xl text-[#c0090c]" />
                </div>
            </div>
            <PiInfoLight className="lg:hidden text-xl cursor-pointer text-white/50 hover:text-white" />
        </div>
    </div>)
}