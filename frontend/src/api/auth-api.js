import axios from "../utils/axios";


export async function loginApi(email , password) {
 
    try {
        const response = await axios.post('/auth/login',{email,password},{
            withCredentials:true,
            headers:{"Content-Type" : "application/json"},
            timeout : 20000
        })

        return response
    } catch (err) {
        return err.response
    }
}

export async function registerApi(fullName,email,password) {
    
    try {
        const response = await axios.post('/auth/register',{fullName,email,password,},{
            withCredentials:true,
            headers : {"Content-Type":"application/json"},
            timeout : 20000
        })

        return response
    } catch (err) {
        return err.response
    }
}

export async function profileApi() {
    try {
        const response = await axios.get('/users/profile',{
            withCredentials:true,
            headers:{"Content-Type":"application/json"},
            timeout : 20000
        })

        return response

    } catch (err) {
        return err.response
    }
}