import A, { Axios } from 'axios'

export const axios: Axios = A.create({
    baseURL: '/api',
    withCredentials: true,
})

export const restaurantIdFromPath = () => {
    return window.location.pathname.slice(
        window.location.pathname.lastIndexOf("/") + 1
    );
}

export const calculatePrice = (fullPrice: number, discountedPercent: number) => {
    const price = fullPrice - fullPrice * (discountedPercent / 100);
    return price;
};