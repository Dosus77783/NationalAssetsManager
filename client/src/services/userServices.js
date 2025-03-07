import axios from 'axios'

const USER_INSTANCE = axios.create({
    baseURL:"http://localhost:8008/user/api"
})

// LOGIN
export async function loginUser(formData){
    try{
        const dataRES = await USER_INSTANCE.post("/login", formData, { withCredentials: true} )
        console.log(dataRES)
        return dataRES.data

    }catch(error){
        console.log("in userServices CATCH ----- LOGIN")
        throw error

    }
}

export async function autoLogin(){
    try{
        const dataRES = await USER_INSTANCE.get("/", { withCredentials: true} )
        console.log(dataRES, "in userServices ------- AUTO LOGIN SUCCESS")
        return dataRES.data

    }catch(error){
        console.log("in userServices CATCH ----- AUTO LOGIN")
        throw error

    }
}

// LOGOUT
export async function logoutUser(){
    try{
        const dataRES = await USER_INSTANCE.post("/logout", {} , { withCredentials: true} )
        console.log(dataRES)
        return dataRES.data

    }catch(error){
        console.log("in userServices LOGOUT")
        throw error

    }
}


// REGISTER
export async function registerUser(formData){
    try{
        const dataRES = await USER_INSTANCE.post("/register", formData, { withCredentials: true} )
        console.log(dataRES)
        return dataRES.data

    }catch(error){
        console.log("in userServices REGISTER")
        throw error
    }
}

// export async function getAllPatients(){
//     return await PATIENT_INSTANCE.get("/")
//         .then( res => res.data)
//         .catch( error => {throw error})
// }

// export async function createPatient(data){
//     return await PATIENT_INSTANCE.post("/",data)
//     .then( res => res.data)
//     .catch( error => {throw error})
// }

// export async function editPatientById(id, data){
//     return await PATIENT_INSTANCE.put(`/${id}`, data)
//         .then( res => res.data)
//         .catch( error => {throw error})
// }

// export async function deletePatientById(id){
//     return await PATIENT_INSTANCE.delete(`/${id}`)
//         .then( res => res.data)
//         .catch( error => {throw error})
// }