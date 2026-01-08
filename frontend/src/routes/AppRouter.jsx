import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import MoodDetectionUI from "../pages/MoodDetection"
import ScanMood from "../pages/ScanMood"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ScanMood />} />
        <Route path="/home" element={<Home />} />
        <Route path="/moodDetect" element={<MoodDetectionUI />} />
      </Routes>
    </>
  )
}

export default AppRouter