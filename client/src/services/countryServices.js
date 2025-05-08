import axios from 'axios'

const SERVER_PORT = import.meta.env.VITE_SERVER_PORT;

const COUNTRY_INSTANCE = axios.create({
    baseURL:"http://localhost:" + SERVER_PORT + "/country/api"
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

// DELETE - REMOVE

export async function deleteCountry(id){
    return await COUNTRY_INSTANCE.delete("/" + id, { withCredentials: true})
        .then( res => res.data)
        .catch( error => {throw error})
}