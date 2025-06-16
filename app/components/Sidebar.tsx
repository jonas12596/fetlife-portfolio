import { BsPencilSquare } from "react-icons/bs";

export default function Sidebar() {
    return (
        <div className="hidden lg:flex flex-col w-60 bg-[#1e1e1e] border-r-[.5px] border-[#444] py-4" >
            <div className="w-full mt-10">
                <button className="w-full flex items-center justify-center gap-2 cursor-pointer border-b border-[#444] px-4 py-[10.75px]">
                    <BsPencilSquare className="text-stone-500" />
                    <p className="text-stone-400">New Conversation</p>
                </button>
                <div className="mt-10 px-4">
                    <h2 className=" text-white cursor-pointer mb-3 bg-black/35 px-3 py-2">Inbox</h2>
                    <div className="w-full relative flex items-start flex-col px-8">
                        <div className="absolute left-4 top-0 w-[2px] h-full bg-[#444]/50"></div>
                        <button className="text-sm text-stone-400 cursor-pointer duration-300 hover:bg-black/35 px-3 py-2 w-full text-left">Unread</button>
                        <button className="text-sm text-stone-400 cursor-pointer duration-300 hover:bg-black/35 px-3 py-2 w-full text-left">Friends</button>
                        <button className="text-sm text-stone-400 cursor-pointer duration-300 hover:bg-black/35 px-3 py-2 w-full text-left">Followers</button>
                    </div>
                </div>
                <div className="w-full flex flex-col space-y-2 mt-4 px-4">
                    <button className="text-sm text-stone-400 cursor-pointer hover:bg-black/35 px-3 py-2 w-full text-left">Request</button>
                    <button className="text-sm text-stone-400 cursor-pointer hover:bg-black/35 px-3 py-2 w-full text-left">Archived</button>
                    <button className="text-sm text-stone-400 cursor-pointer hover:bg-black/35 px-3 py-2 w-full text-left">All Mail</button>
                </div>
            </div>
        </div >)
}