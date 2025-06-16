
import Image from 'next/image';
import xpLogo from '../../public/xp.png'
import connection from '../../public/connection.png'
import window from '../../public/window.png'
import bluetooth from '../../public/bluetooth.png'

interface NavProps {
  windowMin: boolean;
  startBtn: boolean;
  handleWindowMin: () => void;
  handleStartBtn: () => void;
}

export default function Nav({ windowMin, startBtn, handleWindowMin, handleStartBtn }: NavProps) {
  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full h-8 bg-gradient-to-b from-[#418deb] to-[#245edc] flex items-center justify-between shadow-[0_-1px_3px_rgba(0,0,0,0.5)] border-t border-white/40 z-20">
        <div className="h-full flex items-center gap-2">
          <button
            onClick={handleStartBtn}
            className={startBtn ? "w-[80px] flex items-center justify-center cursor-pointer gap-2 px-3 py-[2px] rounded-r h-8 font-bold text-white text-sm bg-gradient-to-b from-[#2b8120] to-[#1c9a1f] border border-[#126907] shadow-inner relative" : "w-[80px] flex items-center justify-center cursor-pointer gap-2 px-3 py-[2px] rounded-r h-8 font-bold text-white text-sm bg-gradient-to-b from-[#1c9a1f] to-[#2b8120] border border-[#126907] shadow-inner relative"}>
            <Image src={xpLogo} alt="About Windows" width={16} height={16} />
            <div className="absolute inset-0 rounded-r pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[50%] rounded-r bg-white/10 blur-[1px]"></div>
            </div>
            Start
          </button>

          {/* Open Application (minimized window tab) */}
          <div
            onClick={handleWindowMin}
            className={windowMin ? "h-8 cursor-pointer flex items-center gap-1 px-3 py-1 bg-gradient-to-b from-[#387ef0] to-[#7ba6ec] rounded border border-[#0052e6] shadow-inner text-white text-sm" : "h-8 cursor-pointer flex items-center gap-2 px-3 py-1 bg-gradient-to-b from-[#7ba6ec] to-[#387ef0] rounded border border-[#0052e6] shadow-inner text-white text-sm"}>
            <Image src={window} alt="About Windows" width={16} height={16} />
            Jonas Guzman
          </div>
        </div>

        {/* Right side - System Tray + Clock */}
        <div className="flex items-center px-2 gap-2 bg-gradient-to-b from-[#7ba6ec] to-[#387ef0] pr-2 rounded-l border h-8 border-[#0052e6] shadow text-white font-normal text-sm">
          <div className="flex items-center gap-1.5">
            <Image src={connection} alt="Connection" width={16} height={16} />
            <Image src={bluetooth} alt="Bluetooth" width={16} height={16} />
          </div>

          {/* Clock */}
          <div className="text-white text-sm">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </nav>
    </>
  );
}
