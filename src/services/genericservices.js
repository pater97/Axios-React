import axios from 'axios'
import PROPRETIES from '../propreties/propreties'

const instance = axios.create({
    baseURL:PROPRETIES.BASEURL,
    timeout: PROPRETIES.timeout
})

export function responseApi(response){
    return {
        data: response?.data,
        status: response?.status
    }
}

export function responseApiError(error){
    return {
        message: error?.message,
        status: error?.status
    }
}

export async function getApi(resource,header = null){
    return instance
    .get(resource, {
        headers: header !== null ? {Authorizzation: `Barer ${header}` } : ""
    })
    .then((response) => {
        return responseApi(response)
    })
    .catch((error) => {
        return responseApiError(error)
    })
}