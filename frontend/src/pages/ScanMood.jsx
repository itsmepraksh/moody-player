import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePause, faCircleQuestion, faHeadphones } from "@fortawesome/free-regular-svg-icons"
import { faGear, faShield } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import { fetchSongsByMood } from "../config/helperFunc";


const ScanMood = () => {

    const webcamRef = useRef(null);
    const [mood, setMood] = useState(null);
    const [cameraOn, setCameraOn] = useState(false);
    const [modelsLoaded, setModelsLoaded] = useState(false);
    const [loadingError, setLoadingError] = useState(null);

    const [data, setData] = useState(null)


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


                if (mood) {
                    setCameraOn(false)
                    setTimeout(async () => {
                        const response = await fetchSongsByMood(mood)
                        if (response?.data) {
                            setData(response.data)
                        }
                    }, 5000)
                } else setCameraOn(false)



            } else {
                console.log("No face detected");
            }
        } catch (err) {
            console.error("Face detection error:", err);
        }
    };
    return (

        <div className="flex flex-col p-5 bg-[#1A1022] min-h-screen w-full" >
            <div id="top-nav" className="flex justify-between items-center">
                <div className="flex items-center gap-2 justify-around bg-[#211729] text-white border border-zinc-100/10 shadow-md font-medium rounded-3xl p-4 w-full ">
                    <div className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faHeadphones} />
                        <p className="text-center  text-sm font-semibold">EmoMusic</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faGear} />
                        <FontAwesomeIcon icon={faCircleQuestion} />
                    </div>
                </div>
            </div>


            <div id="center-data" className="mt-auto py-5 flex flex-col justify-center items-center">


                <div className="relative overflow-hidden w-80 h-60 bg-[#09090C]/50 border border-zinc-100/20 rounded-4xl mix-blend-normal">
                    <div id="tagline" className="absolute z-[99] w-full h-full flex flex-col justify-center items-center animate-bounce [animation-duration:5s] [animation-timing-function:ease-out-in] ">

                        <hr className="border border-[#6B11AD]/50 w-60 " />
                    </div>
                    {cameraOn && modelsLoaded ? (
                        <div className="w-full h-full border-2 border-blue-500 rounded-lg overflow-hidden">
                            <Webcam
                                ref={webcamRef}
                                audio={false}
                                screenshotFormat="image/jpeg"
                                videoConstraints={{ facingMode: "user" }}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : (
                        <h1 className="text-blue-300 text-sm py-2 text-center">Start camera to detect mood</h1>
                    )}

                </div>

                <div id="cta-btn" className="pt-15 md:flex md:gap-5  md:w-96   justify-evenly">

                    <div className="flex w-52 items-center justify-evenly uppercase font-semibold  bg-[#6B11AD] rounded-3xl text-white py-3 px-7 text-xs text-center">
                        <p onClick={() => setCameraOn(true)}
                            disabled={!modelsLoaded}>start scan</p>
                        <FontAwesomeIcon icon={faCirclePause} />
                    </div>

                    <p
                        // onClick={() => setCameraOn(false)}
                        className="text-zinc-500 w-52 uppercase text-xs py-3 border border-zinc-100/20 my-3 text-center rounded-3xl">retry</p>
                </div>

            </div>

            <div id="bottom-foot"
                className="flex mt-auto rounded-full justify-center items-center p-4 px-5   text-zinc-100/30 place-self-center text-xs my-5 gap-2 ">
                <FontAwesomeIcon icon={faShield} />
                <p className=" text-[.6rem]">Camera data is processed locally and never stored</p>

            </div>
        </div>
    )

}

export default ScanMood