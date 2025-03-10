import { NewsResponse } from "@/pages/api/fetch-news";
import axios, { isAxiosError } from "axios";

const api = axios.create({
    baseURL: '/api/',
})

export const fetchNews = async (search: string) => {
    return await api.get<NewsResponse>(`fetch-news?search=${search}`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        if (isAxiosError(err)) {
            throw new Error(err?.response?.data?.message || 'Falha ao buscar notícias, tente novamente em alguns momentos');
        }
        throw new Error('Falha ao buscar notícias');
    });
}