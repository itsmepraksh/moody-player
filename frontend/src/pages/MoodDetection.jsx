import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import { fetchSongsByMood } from "../config/helperFunc";

const MoodDetection = () => {
    const webcamRef = useRef(null);
    const [mood, setMood] = useState(null);
    const [cameraOn, setCameraOn] = useState(false);
    const [modelsLoaded, setModelsLoaded] = useState(false);
    const [loadingError, setLoadingError] = useState(null);


    const [songList, setSongList] = useState([])




    // Load face-api models
    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = "/models";
            try {
                console.log("Loading models from:", MODEL_URL);
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                    faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
                ]);
                setModelsLoaded(true);
                console.log("All models loaded successfully");
            } catch (error) {
                console.error("Error loading models:", error);
                setLoadingError("Failed to load models. Please ensure all model files are in /public/models/");
            }
        };
        loadModels();
    }, []);

    // Detect mood continuously every 500ms
    useEffect(() => {
        let intervalId;
        if (cameraOn && modelsLoaded) {
            intervalId = setInterval(detectMood, 500);
        }
        return () => clearInterval(intervalId);
    }, [cameraOn, modelsLoaded]);

    const detectMood = async () => {
        if (!webcamRef.current || !webcamRef.current.video) return;
        const video = webcamRef.current.video;

        if (video.readyState !== 4) return;

        try {
            const detections = await faceapi
                .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.5 }))
                .withFaceExpressions();

            if (detections && detections.expressions) {
                const expressions = detections.expressions;
                const sorted = Object.entries(expressions).sort((a, b) => b[1] - a[1]);
                setMood(sorted[0][0]);
                console.log("Detected mood:", sorted[0][0]);
            } else {
                console.log("No face detected");
            }
        } catch (err) {
            console.error("Face detection error:", err);
        }
    };

    const songSuggestion = async ()=>{
        try {
            const data = await fetchSongsByMood(mood);

            setSongList(data)

            console.log(data)

        } catch (err) {
            console.error(err)
        }
    }

    const songs = [
        "Happy Vibes - Artist A",
        "Chill Beats - Artist B",
        "Relaxing Sounds - Artist C",
        "Energetic Tune - Artist D",
        "Mood Booster - Artist E",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 text-gray-100 p-6 lg:p-16 font-sans select-none">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-14">
                {/* Camera */}
                <div className="h-96 flex justify-center lg:justify-start">
                    <div className="relative w-72 sm:w-80 md:w-96   aspect-square bg-gradient-to-tr from-blue-900 to-blue-800 rounded-3xl shadow-neumorphic-inner border border-blue-700 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-6 rounded-2xl border-4 border-blue-500 shadow-[0_0_15px_2px_rgba(59,130,246,0.6)] pointer-events-none"></div>

                        {cameraOn && modelsLoaded ? (
                            <div className="w-72 h-72 border-2 border-blue-500 rounded-lg overflow-hidden">
                                <Webcam
                                    ref={webcamRef}
                                    audio={false}
                                    screenshotFormat="image/jpeg"
                                    videoConstraints={{ facingMode: "user" }}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : (
                            <h1 className="text-blue-300">Start camera to detect mood</h1>
                        )}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex-1 max-w-md flex flex-col justify-between bg-blue-900 bg-opacity-30 backdrop-blur-md rounded-3xl p-10 shadow-lg shadow-blue-900/70">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-wide mb-5 text-white drop-shadow-lg">
                            Face Capture for Mood Detection
                        </h1>
                        <p className="text-blue-300 text-base leading-relaxed mb-10">
                            Position your face within the frame and choose a detection mode to analyze your mood and get personalized song recommendations.
                        </p>
                        {loadingError && <p className="text-red-400 text-sm mb-5 font-medium">{loadingError}</p>}
                        {mood && <p className="text-green-400 text-xl mb-5">Detected Mood: {mood}</p>}
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={() => setCameraOn(true)}
                            disabled={!modelsLoaded}
                            className={`w-full py-5 rounded-xl font-semibold text-lg shadow-neumorphic hover:shadow-neumorphic-hover focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-1 ${!modelsLoaded ? "opacity-50 cursor-not-allowed" : "bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500"
                                }`}
                        >
                            Start
                        </button>
                        <button
                            onClick={() => setCameraOn(false)}
                            className="w-full py-5 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 shadow-neumorphic hover:shadow-neumorphic-hover focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-1"
                        >
                            Stop
                        </button>
                    </div>


                </div>


            </div>

            <div className="my-10">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold mb-6 text-blue-400 tracking-wide drop-shadow-sm">
                        Song Recommendations
                    </h2>
                    <button onClick={songSuggestion} className="bg-green-500 rounded-xl p-2">suggest</button>
                </div>
                <ul className="space-y-4 max-h-64 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
                    {songs.map((song, idx) => (
                        <li
                            key={idx}
                            className="bg-blue-800 rounded-xl px-6 py-4 hover:bg-blue-700 transition-colors cursor-pointer shadow-inner border border-blue-700"
                            tabIndex={0}
                            role="button"
                            aria-pressed="false"
                        >
                            {song}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MoodDetection;
