import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import MoodDetectionUI from "../pages/MoodDetection"
import ScanMood from "../pages/ScanMood"
import Login from "../pages/Login"
import Register from "../pages/Register"
import MoodSong from "../pages/MoodSong"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moodDetect" element={<ScanMood />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/moodSong" element={<MoodSong/>}/>
      </Routes>
    </>
  )
}

export default AppRouter