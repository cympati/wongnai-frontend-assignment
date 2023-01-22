import A, { Axios } from 'axios'

export const axios: Axios = A.create({
    baseURL: 'https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api',
    withCredentials: true,
})