import { useEffect, useRef, useState } from "react";
import { FaMicrophone, FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import useVoiceRecorder from "@/hooks/useVoiceRecorder";
import { PiPaperclip } from "react-icons/pi";

interface InputBarProps {
    input: string;
    setInput: (input: string) => void;
    handleSend: () => void;
    vanishMode: boolean;
    toggleVanishMode: () => void;
    onSendVoiceNote: (blob: Blob) => void;
    onSendImage: (imageUrl: string) => void;
}

export default function InputBar({
    onSendImage,
    onSendVoiceNote,
    input,
    setInput,
    handleSend,
    vanishMode,
    toggleVanishMode,
}: InputBarProps) {
    const { recording, startRecording, stopRecording, audioBlob, reset } = useVoiceRecorder();
    const [stream, setStream] = useState<MediaStream | null>(null);

    const canvasRef = useRef<HTMLCanvasElement>(null);


    useEffect(() => {
        if (audioBlob) {
            onSendVoiceNote(audioBlob);
            reset();
        }
    }, [audioBlob, onSendVoiceNote, reset]);


    useEffect(() => {
        if (!recording || !stream) return;

        const audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 64;
        source.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const draw = () => {
            requestAnimationFrame(draw);
            analyser.getByteFrequencyData(dataArray);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#b0090c";
            dataArray.forEach((val, i) => {
                const barHeight = val / 2;
                ctx.fillRect(i * 2, canvas.height - barHeight, 1, barHeight);
            });
        };

        draw();

        return () => {
            audioContext.close();
        };
    }, [recording, stream]);

    // Start recording and get stream
    const handleStartRecording = async () => {
        try {
            const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            setStream(micStream);
            await startRecording();
        } catch (error) {
            console.error("Error accessing microphone:", error);
        }
    };

    const handleStopRecording = () => {
        stopRecording();
        if (stream) {
            stream.getTracks().forEach((track) => track.stop());
            setStream(null);
        }
    };

    return (
        <div className="p-4 bg-[#1e1e1e] flex items-center space-x-2 border-t-[.5px] border-[#444]">
            <button
                onClick={() => {
                    if (recording) {
                        handleStopRecording();
                    } else {
                        handleStartRecording();
                    }
                }}
                className={`p-2 rounded cursor-pointer group relative ${recording ? "bg-red-600" : "bg-[#333] hover:bg-[#444]"
                    }`}
            >
                <FaMicrophone size={18} className="text-white" />
                <span className="absolute w-[80px] bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black/80 rounded opacity-0 group-hover:opacity-100">
                    {recording ? "Recording…" : "Voice Note"}
                </span>
            </button>
            <input
                type="file"
                accept="image/*"
                id="image-upload"
                className="hidden"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const imageUrl = URL.createObjectURL(file);
                    onSendImage(imageUrl);
                    e.target.value = "";
                }}
            />
            <label
                htmlFor="image-upload"
                className="p-2 rounded cursor-pointer bg-[#333] hover:bg-[#444] relative group"
                title="Attach Image"
            >
                <PiPaperclip size={18} className="text-white" />
            </label>

            {recording ? (
                <canvas
                    ref={canvasRef}
                    className="bg-transparent w-full h-2"
                />
            ) : (
                <>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                if (e.shiftKey) {
                                    setInput(input + "\n");
                                } else {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }
                        }}
                        className="flex-1 py-1.5 px-2 outline-none rounded bg-[#333] text-white"
                        placeholder="Say what you're thinking…"
                    />
                    <button
                        onClick={toggleVanishMode}
                        className={`p-2 rounded cursor-pointer ${vanishMode ? "bg-[#b0090c] animate-pulse" : "bg-[#333] hover:bg-[#444]"
                            } group relative`}
                    >
                        <IoTimerOutline size={18} className="text-white" />
                        <span className="absolute w-[100px] bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black/80 rounded opacity-0 group-hover:opacity-100">
                            Vanish Mode
                        </span>
                    </button>

                    <button
                        onClick={handleSend}
                        className="p-2 rounded cursor-pointer bg-[#b0090c] hover:bg-[#c0090c]/80"
                    >
                        <FaPaperPlane size={18} className="text-white" />
                    </button>
                </>
            )}
        </div>
    );
}