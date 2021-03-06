import axios from "axios";

const instance = axios.create({
    baseURL: `https://secret-ocean-49799.herokuapp.com/https://www.mrsoft.by/data.json`, // use it for CORS
})

type ResponseType = {
    data: string[]
}

export const API = {
    getStrings() {
        return instance.get<ResponseType>(``)
            .then(response => {
                return response.data
            })
    }
}