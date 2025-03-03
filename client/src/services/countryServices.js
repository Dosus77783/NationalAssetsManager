import axios from 'axios'

const COUNTRY_INSTANCE = axios.create({
    baseURL:"http://localhost:8004/country/api"
})

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