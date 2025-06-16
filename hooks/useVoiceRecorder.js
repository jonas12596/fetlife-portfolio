'use client'

import { useState, useRef } from "react";

export default function useVoiceRecorder() {
    const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);
    

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.addEventListener("dataavailable", event => {
            audioChunks.current.push(event.data);
        });

        mediaRecorderRef.current.addEventListener("stop", () => {
            const blob = new Blob(audioChunks.current, { type: "audio/webm" });
            setAudioBlob(blob);
            audioChunks.current = [];
        });

        mediaRecorderRef.current.start();
        setRecording(true);
    };

    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setRecording(false);
    };

    const reset = () => setAudioBlob(null);

    return { recording, audioBlob, startRecording, stopRecording, reset };
}