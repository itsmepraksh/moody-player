import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import MoodDetectionUI from "../pages/MoodDetection"

const AppRouter = () => {
  return (
    <>
        <Routes  >
            <Route path="/" element={<Home/>}/>
            <Route index  element={<MoodDetectionUI/>}/>
        </Routes>
    </>
  )
}

export default AppRouter