import axios from "../utils/axios"


export async function fetchSongsByMood(mood) {

    const songType = {
        mood :mood
    } 

    try {
        
        const response = await axios.post('/songs/getSongsByMood',songType,{
            withCredentials : true,
            headers:{ "Content-Type":"application/json"},
            timeout:20000
        })

        return response

    } catch (err) {
        return err.response
    }
} 