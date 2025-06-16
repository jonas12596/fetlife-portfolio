import { MdClose } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";

export default function ConvoInfo() {
    return (<div className="hidden lg:flex flex-col w-60 bg-[#1e1e1e] border-l-[.5px] border-[#444] py-4">
        <div className="w-full mt-21.5 pt-8 border-t-[.5px] border-[#444] px-4">
            <h2 className="text-[12px] font-semibold text-stone-400 uppercase mb-3">In Conversations</h2>
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-sky-300" />
                    <p className="text-sm text-stone-400">User A</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-indigo-300" />
                    <p className="text-sm text-stone-400">User B</p>
                </div>
            </div>
        </div>
        <div className="my-8 px-4">
            <h2 className="text-[12px] font-semibold text-stone-400 uppercase mb-3">Not looking for</h2>
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <MdClose className="text-red-500" />
                    <p className="text-sm text-stone-400"> Long-Distance Relationship</p>
                </div>
                <div className="flex items-center gap-2">
                    <MdClose className="text-red-500" />
                    <p className="text-sm text-stone-400"> One Night Stand</p>
                </div>
                <div className="flex items-center gap-2">
                    <MdClose className="text-red-500" />
                    <p className="text-sm text-stone-400">Cybersex</p>
                </div>
            </div>
        </div>
        <div className="mb-8 px-4">
            <h2 className="text-[12px] font-semibold text-stone-400 uppercase mb-3">Actions</h2>
            <div className="flex flex-col space-y-2">
                <button className="flex items-center cursor-pointer gap-2">
                    <FaEnvelope className="text-stone-500" />
                    <span className="text-sm text-stone-400">Mark as Unread</span>
                </button>
                <button className="flex items-center cursor-pointer gap-2">
                    <IoMdArchive className="text-stone-500" />
                    <span className="text-sm text-stone-400">Archive</span>
                </button>
                <button className="flex items-center cursor-pointer gap-2">
                    <RiDeleteBinFill className="text-stone-500" />
                    <span className="text-sm text-stone-400">Delete</span>
                </button>
            </div>
        </div>
    </div>)
}