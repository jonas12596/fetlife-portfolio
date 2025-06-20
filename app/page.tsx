"use client"
import { useState } from "react";
import Image from "next/image";
import Nav from "./components/Nav";
import MyComputer from "./components/SystemProps";
import trashBin from '../public/bin.png'


export default function Home() {
  const [windowMin, setWindowMin] = useState(true);
  const [startBtn, setStartBtn] = useState(false);

  function handleWindowMin() {
    setWindowMin(!windowMin);
  }

  function handleStartBtn() {
    setStartBtn(!startBtn);
  }


  return (
    <div className="home-container min-w-full h-screen relative">
      <Nav windowMin={windowMin} startBtn={startBtn} handleWindowMin={handleWindowMin} handleStartBtn={handleStartBtn} />
      <MyComputer windowMin={windowMin} />
      <div className="absolute top-4 left-4 flex items-center flex-col gap-1">
        <Image src={trashBin} alt="Trash bin" className="z-0 w-8 h-8" />
        <p className="text-[10px] lg:text-[12px] text-white">Recycle Bin</p>
      </div>
    </div>
  );
}