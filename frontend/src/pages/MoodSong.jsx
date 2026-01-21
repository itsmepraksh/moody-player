import { faHeart, faIdBadge, faMoon } from "@fortawesome/free-regular-svg-icons"
import { faChartSimple, faEllipsis, faGear, faPause, faPlay, faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { fetchSongsByMood } from "../config/helperFunc"


const MoodSong = () => {

  const moodDta = useSelector(state => state.mood.value)

  const [songDta, setSongDta] = useState([])

  const [isPlay, setIsPlay] = useState(false)

  const fetchSongs = async () => {
    const response = await fetchSongsByMood(moodDta)
    console.log(response)
    setSongDta(response.data.songs)
  }

  useEffect(() => {
    async function fetchDta() {
      await fetchSongs()
    }
    fetchDta()
  }, [moodDta])


  const audioPlay = ()=>{
    console.log("audio play hoga kanhaji")
    document.getElementById("player").play();
    setIsPlay(!isPlay)
  }

  const audioPause = ()=>{
    document.getElementById("player").pause()
    setIsPlay(!isPlay)
  }
 


  return (
    <div className="relative flex min-h-screen w-full flex-col text-white font-display overflow-hidden bg-[linear-gradient(to_bottom,#2A0845,#4F0E70,#2A3D80,#1C3265)]">

      {/* <!-- Main Layout Container --> */}
      <div className="relative z-10 flex h-full flex-col">
        {/* <!-- Header (Modified TopNavBar for transparency) --> */}
        <header className="flex w-full items-center justify-between px-8 py-6 lg:px-12">
          <div className="flex items-center gap-4 text-white/90 hover:text-white transition-colors cursor-pointer">
            <div className="size-6 text-primary">

              <FontAwesomeIcon icon={faChartSimple} />
            </div>
            <h2 className="text-xl font-bold tracking-tight">SonicFlow</h2>
          </div>
          <div className="flex items-center gap-6">
            {/* <!-- User Profile --> */}
            <div className="flex items-center gap-4">
              <button className="flex size-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md border border-white/5 text-white">
                <FontAwesomeIcon icon={faGear} />
              </button>

              <div className="text-center py-2 rounded-full size-10 ring-2 ring-white/10"  >
                <FontAwesomeIcon icon={faIdBadge} />
              </div>
            </div>
          </div>
        </header>
        {/* <!-- Main Content Area --> */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 w-full max-w-7xl mx-auto ">
          {/* <!-- Glassmorphic Emotion Card --> */}
          <div className="glass-panel w-full max-w-4xl p-1 rounded-xl relative group">
            {/* <!-- Inner Glow Effect --> */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-xl opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-1000"></div>
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 lg:p-16 rounded-[inherit] bg-[#0a0810]/40 overflow-hidden">
              {/* <!-- Left: Abstract Visual --> */}
              <div className="relative flex-shrink-0 animate-float">
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full"></div>
                <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-[0_0_60px_-10px_rgba(107,17,172,0.4)]">
                  {/* <!-- Abstract 3D Symbol Representation --> */}
                  <div className="text-white/90 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                    <FontAwesomeIcon className="text-7xl" icon={faMoon} />
                  </div>
                </div>
              </div>

              {/* <!-- Right: Content --> */}

              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 z-10 w-full">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200/80">Current Vibe Detected</span>
                  <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 text-glow pb-2">
                    Melancholic<br className="hidden md:block" /> Bliss
                  </h1>
                </div>
                <p className="text-sm text-white/70 font-light leading-relaxed max-w-md">
                  A deep dive into the neon night. Reflecting a calm yet poignant atmosphere where time stands still.
                </p>

                {/* <!-- CTA Section --> */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
                  <button className=" bg-purple-600 relative flex h-14 w-full sm:w-auto min-w-[200px] items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 text-white shadow-[0_0_40px_-10px_rgba(107,17,172,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(107,17,172,0.8)]">

                    <div className="absolute inset-0 bg-purple-500 from-white/20 to-transparent opacity-0 transition-opacity group-hover/btn:opacity-100"></div>

                    <FontAwesomeIcon icon={faPlay} />
                    <span className="text-base font-bold tracking-wide">Play Mix</span>

                  </button>
                  {/* <!-- Secondary Actions (ButtonGroup) --> */}
                  <div className="flex items-center gap-3">
                    <button className="flex size-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all" title="Save Mood">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="flex size-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all" title="Share">
                      <FontAwesomeIcon icon={faShare} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="w-full place-self-center m-5 p-5 max-w-4xl flex flex-col gap-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-2xl font-bold tracking-tight text-white/90">Curated for your mood</h3>
            <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest">See All</button>
          </div>
          <div className="glass-panel p-6 rounded-3xl w-full">
            <div className="flex flex-col gap-2 max-h-[420px] overflow-y-auto pr-2">
              {songDta?.map((songs, idx) => (
                <div key={idx} className="song-card group/item cursor-pointer flex items-center justify-between gap-5">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center bg-red-500">
                    

                    {isPlay ? <FontAwesomeIcon onClick={audioPause} icon={faPause} /> : <FontAwesomeIcon onClick={audioPlay} className="text-white z-9" icon={faPlay} /> }

                    

                    <audio id="player" src={songs.songUrl}>

                    
                    </audio>
                     
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white truncate text-lg capitalize">{songs.songName}</h4>
                    <p className="text-white/50 text-sm truncate">{songs.songMood}</p>
                  </div>
                  <div className="hidden md:flex items-center gap-6 px-4">
                    <span className="text-white/40 text-sm font-medium">4:12</span>
                    <button className="text-white/30 hover:text-white transition-colors">
                      <FontAwesomeIcon icon={faEllipsis} />
                    </button>
                  </div>
                </div>
              )

              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MoodSong