import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadphones } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight, faMusic } from "@fortawesome/free-solid-svg-icons"
import { faIcons } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { profileApi } from "../api/auth-api"

import {useDispatch, useSelector} from "react-redux"
import { setUser } from "../redux/feature/userSlice"


const Home = () => {


  const dispatch = useDispatch()
  const user = useSelector((state)=> state.user.user);

  console.log(user)

  const userProfileDta = async ()=>{
    const response = await profileApi()

    console.log(response)

    if(response.status!==200) return;

    dispatch(setUser(response.data.data))

  }

  useEffect(() => {

     if(!user){
      userProfileDta();
     }

  },[user])
  
  return (
    <div className="flex flex-col p-5 bg-[linear-gradient(to_bottom,#2A0845,#4F0E70,#2A3D80,#1C3265)]
        md:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,1),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,1),transparent_60%),linear-gradient(to_bottom,#2A0845,#4F0E70,#2A3D80,#1C3265)]
  
 
 min-h-screen w-full" >
      <div id="top-nav" className="flex justify-between items-center">

        <div className="flex items-center gap-2 justify-center text-white border border-zinc-100/10 shadow font-medium rounded-3xl p-2 w-28">
          <FontAwesomeIcon icon={faHeadphones} />
          <p className="text-center  text-sm font-semibold">Feel it</p>
        </div>

        <div className="hidden md:flex items-center gap-2 md:gap-8 justify-center text-white border border-zinc-100/10 shadow font-medium rounded-3xl p-2 md:px-8 w-28 md:w-fit ">
          <p className="text-center  text-sm font-semibold">Manifestot</p>
          <p className="text-center  text-sm font-semibold">Technology</p>
          <p className="text-center  text-sm font-semibold">Premium</p>
        </div>
 

          <Link to={"/login"} className="hidden md:block uppercase text-sm text-white font-semibold">Login</Link>
      </div>


      <div id="center-data" className="mt-auto py-5 flex flex-col justify-center items-center">
        <div id="tagline" className="flex flex-col justify-center items-center animate-bounce [animation-duration:15s] [animation-timing-function:ease-in-out]">
          <p className="uppercase text-xs rounded-xl border border-zinc-100/30 w-fit px-5 py-[0.1rem] text-white">ai emotion engine active</p>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold text-white py-5">Feel it.</h1>
          <p className="text-zinc-400 font-light text-center px-1 md:text-lg">Let AI hear your mood. Experience music that understands you.</p>
        </div>

        <div id="cta-btn" className="pt-5">
          <Link to={"/moodDetect"} className="flex items-center justify-evenly uppercase font-semibold  bg-[#6B11AD] rounded-3xl text-white p-3 px-7 text-sm text-center">
            <p>start listening</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>

          <p className="text-zinc-500 uppercase text-xs py-3">no account required for demo</p>
        </div>

      </div>

      <div id="bottom-foot"
        className="flex flex-col md:flex-row mt-auto rounded-full justify-center items-center p-4 px-5 w-[90%] md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[40vw] text-[#7E8AAD]  place-self-center text-sm border-[#7E8AAD]/40 border shadow ">

        <div id="connect" className="flex gap-5 items-center">
          <p className="uppercase text-xs">connect</p>
          <FontAwesomeIcon icon={faMusic} />
          <FontAwesomeIcon icon={faIcons} />
        </div>

        <hr className="border-zinc-100/20 border-[0.25px] w-[80%] md:w-[2rem] my-3 md:rotate-[90deg]" />

        <div id="terms" className="flex justify-evenly uppercase gap-5 text-xs ">
          <p >privacy</p>
          <p>terms</p>
        </div>

        <hr className="hidden md:block border-zinc-100/20 border-[0.25px] w-[2rem] my-3 md:rotate-[90deg]" />

        <h1 className="hidden md:block">Powered by itsmepraksh</h1>
      </div>
    </div>
  )
}

export default Home