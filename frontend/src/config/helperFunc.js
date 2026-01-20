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

export async function loginApi(email , password) {

    const userDta = {email,password}
    try {
        const response = await axios.post('/auth/login',{userDta},{
            withCredentials:true,
            headers:{"Content-Type" : "application/json"},
            timeout : 20000
        })

        return response
    } catch (err) {
        return err.response
    }
}

// export async function fetchAllSongs() {


//     try {
        
//         const response = await axios.post('/song/fetchAllSongs',{
//             withCredentials : true,
//             headers:{""}
//         })


//     } catch (err) {
//         return err.response
//     }
// }