import axios from "../utils/axios"


export async function fetchSongsByMood(mood) {

    console.log(mood)

    const songType = {
        mood :mood
    } 
    try {
        
        const response = axios.post('/songs/getSongs',songType,{
            withCredentials : true,
            headers:{ "Content-Type":"application/json"},
            timeout:10000
        })

        return response

    } catch (err) {
        return err.response
    }
}