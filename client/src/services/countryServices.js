import axios from 'axios'

const COUNTRY_INSTANCE = axios.create({
    baseURL:"http://localhost:8008/country/api"
})

// POST
export async function createCountryService(formData){
    return await COUNTRY_INSTANCE.post("/",formData, { withCredentials: true} )
    .then( res => res.data)
    .catch( error => {throw error})
}

// GET
export async function getUserCountryDashboard(){
    return await COUNTRY_INSTANCE.get("/user/dashboard" , { withCredentials: true})
        .then( res => res.data)
        .catch( error => {throw error})
}

export async function getUserCountryById(id){
    return await COUNTRY_INSTANCE.get("/" + id , { withCredentials: true})
        .then( res => res.data)
        .catch( error => {throw error})
}

export async function getCountryTaxes(id){
    return await COUNTRY_INSTANCE.get("/taxes/" + id , { withCredentials: true})
        .then( res => res.data)
        .catch( error => {throw error})
}

export async function getCountrySpending(id){
    return await COUNTRY_INSTANCE.get("/spending/" + id , { withCredentials: true})
        .then( res => res.data)
        .catch( error => {throw error})
}

// UPDATE - PUT
export async function updateCountryTaxes(id, data){
    return await COUNTRY_INSTANCE.put("/taxes/" + id , data, { withCredentials: true})
        .then( res => res.data)
        .catch( error => {throw error})
}

export async function updateCountrySpending(id, data){
    return await COUNTRY_INSTANCE.put("/spending/" + id , data, { withCredentials: true})
        .then( res => res.data)
        .catch( error => {throw error})
}

// export async function getAllPatients(){
//     return await PATIENT_INSTANCE.get("/")
//         .then( res => res.data)
//         .catch( error => {throw error})
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