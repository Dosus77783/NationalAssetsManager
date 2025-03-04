import axios from 'axios'

const USER_INSTANCE = axios.create({
    baseURL:"http://localhost:8004/user/api"
})