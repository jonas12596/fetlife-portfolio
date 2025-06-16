"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";
import VanishModeBanner from "../components/VanishModeBanner";
import InputBar from "../components/InputBar";
import ConvoInfo from "../components/ConvoInfo";
import ChatMessages, { Message } from "../components/ChatMessages";

export default function ChatPage() {
    const [normalMessages, setNormalMessages] = useState<Message[]>([
        { sender: 'userA', type: 'text', content: 'Hey there :)' }
    ]);

    const [vanishMessages, setVanishMessages] = useState<Message[]>([]);
    const [vanishMode, setVanishMode] = useState(false);
    const [input, setInput] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessage = { sender: "userB", type: 'text', content: input };
        if (vanishMode) {
            setVanishMessages(prev => [...prev, newMessage as Message]);
        } else {
            setNormalMessages(prev => [...prev, newMessage as Message]);
        }

        setInput("");
    };

    const handleSendImage = (imageUrl: string) => {
        const newImageMessage: Message = {
          sender: "userB",
          type: "image",
          content: imageUrl,
        };
      
        if (vanishMode) {
          setVanishMessages(prev => [...prev, newImageMessage]);
        } else {
          setNormalMessages(prev => [...prev, newImageMessage]);
        }
      };

    const handleSendVoiceNote = (blob: Blob) => {
        const newVoiceMessage: Message = {
            sender: "userB",
            type: "voice",
            content: blob
        };

        if (vanishMode) {
            setVanishMessages(prev => [...prev, newVoiceMessage]);
        } else {
            setNormalMessages(prev => [...prev, newVoiceMessage]);
        }
    };

    const toggleVanishMode = () => {
        if (vanishMode) {
            setVanishMessages([]);
        }
        setVanishMode(prev => !prev);
    };

    useEffect(() => {
        const hasSeenModal = localStorage.getItem('hasSeenModal');
        if (!hasSeenModal) {
            setShowModal(true);
            setTimeout(() => setAnimateModal(true), 50);
            localStorage.setItem('hasSeenModal', 'true');
        }
    }, []);

    return (
        <div className={`flex h-screen transition-colors duration-500 ${vanishMode ? 'bg-[#504848]' : 'bg-[#1e1e1e]'}`}>
            <Sidebar />
            <div className="flex flex-col flex-1">
                <ChatHeader />
                <VanishModeBanner vanishMode={vanishMode} />
                <div className="flex-1 overflow-y-auto">
                    <ChatMessages messages={vanishMode ? vanishMessages : normalMessages} vanishMode={vanishMode} />
                </div>

                <InputBar
                    input={input}
                    setInput={setInput}
                    handleSend={handleSend}
                    vanishMode={vanishMode}
                    toggleVanishMode={toggleVanishMode}
                    onSendVoiceNote={handleSendVoiceNote}
                    onSendImage={handleSendImage}
                />
            </div>
            <ConvoInfo />
        </div>
    );
}