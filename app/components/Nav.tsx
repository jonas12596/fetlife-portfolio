
import Image from 'next/image';
import xpLogo from '../../public/xp.png'
import connection from '../../public/connection.png'
import window from '../../public/window.png'
import bluetooth from '../../public/bluetooth.png'
import admin from '../../public/admin.jpg'
import shutdown from '../../public/shutdown.png'
import logoff from '../../public/logoff.png'

import internet from '../../public/internet.png'
import email from '../../public/email.png'
import windowMovieMaker from '../../public/windows-movie-maker.png'
import msnExplorer from '../../public/msn-explorer.png'
import windowsMediaPlayer from '../../public/windows-media-player.png'
import windowsTour from '../../public/tour-windows.png'
import transferWiz from '../../public/transfer-wiz.png'
import windowsUpdate from '../../public/windows-update.png'

import myDocuments from '../../public/my-documents.png'
import myRecentDocs from '../../public/recent-documents.png'
import myPictures from '../../public/my-pictures.png'
import myMusic from '../../public/my-music.png'
import myComputer from '../../public/my-computer.png'
import controlPanel from '../../public/control-panel.png'
import printerFax from '../../public/printers-faxes.png'
import helpSupport from '../../public/help-support.png'
import search from '../../public/search.png'
import run from '../../public/run.png'

interface NavProps {
  windowMin: boolean;
  startBtn: boolean;
  handleWindowMin: () => void;
  handleStartBtn: () => void;
}

export default function Nav({ windowMin, startBtn, handleWindowMin, handleStartBtn }: NavProps) {

  const startApplications = [
    {
      key: 1,
      logo: internet,
      appName: 'Internet'
    },
    {
      key: 2,
      logo: email,
      appName: 'Email'
    },
    {
      key: 3,
      logo: windowMovieMaker,
      appName: 'Window Movie Maker'
    },
    {
      key: 4,
      logo: msnExplorer,
      appName: 'MSN Explorer'
    },
    {
      key: 5,
      logo: windowsMediaPlayer,
      appName: 'Windows Media Player'
    },
    {
      key: 6,
      logo: windowsTour,
      appName: 'Tour Windows XP'
    },
    {
      key: 7,
      logo: transferWiz,
      appName: 'Files and Setting Transfer Wizard'
    },
    {
      key: 8,
      logo: windowsUpdate,
      appName: 'Windows Update'
    },
  ]

  const startDocs = [
    {
      key: 1,
      image: myDocuments,
      doc: 'My Documents'
    },
    {
      key: 2,
      image: myRecentDocs,
      doc: 'My Recent Documents'
    },
    {
      key: 3,
      image: myPictures,
      doc: 'My Pictures'
    },
    {
      key: 4,
      image: myMusic,
      doc: 'My Music'
    },
    { key: 5, image: myComputer, doc: 'My Computer' },
    {
      key: 6,
      image: controlPanel,
      doc: 'Control Panel'
    },
    {
      key: 7,
      image: printerFax,
      doc: 'Printers and Faxes'
    },
    {
      key: 8,
      image: helpSupport,
      doc: 'Help and Support'
    },
    {
      key: 9,
      image: search,
      doc: 'Search'
    },
    {
      key: 10,
      image: run,
      doc: 'Run'
    }
  ]

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
          <div className={`start-container absolute bottom-14 rounded-tl-lg rounded-tr-lg w-full md:w-[400px] h-[60vh] ${startBtn ? 'flex' : 'hidden'} items-center justify-center flex-col bg-white`}>
            <div className='w-full p-2 h-14 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-[#418deb] to-[#245edc] flex items-center gap-2 shadow-[0_-1px_3px_rgba(0,0,0,0.5)]'>
              <Image src={admin} width={36} height={36} alt='admin account' className='border border-white rounded-sm' />
              <p className="text-white text-lg">Jonas Guzman</p>
            </div>
            <div className='w-full h-full flex items-center'>
              <div className='w-full h-full flex items-start justify-between flex-col bg-white'>
                {startApplications.map(({ key, logo, appName }, id) => (
                  <div key={id} className="start-app w-full flex items-center gap-1.5 p-2 duration-100 hover:bg-[#245edc] hover:text-white cursor-pointer">
                    <Image src={logo} alt={appName} width={24} height={24} />
                    <div className="flex flex-col">
                      <p className="text-xs">{appName}</p>
                      {(key === 1) && (
                        <p className="sub-text text-[10px] text-gray-500">Internet Explorer</p>
                      )}
                      {(key === 2) && (
                        <p className="sub-text text-[10px] text-gray-500">Outlook Express</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className='w-full h-full flex items-start justify-between flex-col bg-[#d3e5fb] border-l border-[#bed9f7]'>
                {startDocs.map(({ key, image, doc }, id) => (
                  <div key={id} className="start-app w-full flex items-center gap-1.5 p-2 duration-100 hover:bg-[#245edc] hover:text-white cursor-pointer">
                    <Image src={image} alt={doc} width={24} height={24} />
                    <p className="text-xs">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-full px-2 h-12 bg-gradient-to-b from-[#418deb] to-[#245edc] flex items-center justify-end gap-2'>
              <button className='flex items-center gap-1 p-2 cursor-pointer hover:bg-white/10 rounded-sm duration-300 ease-in-out'>
                <Image src={logoff} width={18} height={18} alt='logoff' />
                <p className="text-white text-sm"><span className='underline'>L</span>og off</p>
              </button>
              <button className='flex items-center gap-1 p-2 cursor-pointer hover:bg-white/10 rounded-sm duration-300 ease-in-out'>
                <Image src={shutdown} width={18} height={18} alt='shutdown' />
                <p className="text-white text-sm">T<span className='underline'>u</span>rn off computer</p>
              </button>
            </div>
          </div>

          {/* Open Application (minimized window tab) */}
          <div
            onClick={handleWindowMin}
            className={windowMin ? "h-8 cursor-pointer flex items-center gap-2 px-3 py-1 bg-gradient-to-b from-[#387ef0] to-[#7ba6ec] rounded border border-[#0052e6] shadow-inner text-white text-sm" : "h-8 cursor-pointer flex items-center gap-2 px-3 py-1 bg-gradient-to-b from-[#7ba6ec] to-[#387ef0] rounded border border-[#0052e6] shadow-inner text-white text-sm"}>
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
