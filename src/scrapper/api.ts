import axios, { isAxiosError } from "axios";

const duckduckGoScrap = axios.create({
    baseURL: 'https://html.duckduckgo.com/html/?ia=web&q=',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:84.0) Gecko/20100101 Firefox/84.0'
    }
})

const cnnSrap = axios.create({
    baseURL: 'https://www.cnnbrasil.com.br/?orderby=date&order=desc&s=',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:84.0) Gecko/20100101 Firefox/84.0'
    }
});

const g1Scrap = axios.create({
    baseURL: 'https://g1.globo.com/busca/?q=',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:84.0) Gecko/20100101 Firefox/84.0'
    }
});

export const fetchDucduckgoScrapApi = async (search: string) => {
    return await duckduckGoScrap.get(encodeURIComponent(search))
        .then(item => {
            return item.data
        })
        .catch(err => {
            console.log(err.message);
            if (isAxiosError(err)) {
                throw new Error('Falha ao requisitar listagem via buscador');
            }
            throw new Error('Falha do servidor ao requisitar listagem via buscador')
        })
}

export const fetchCnnApi = async (search: string) => {
    return await cnnSrap.get(encodeURIComponent(search))
        .then(item => {
            return item.data
        })
        .catch(err => {
            console.log(err.message)
            if (isAxiosError(err)) {
                throw new Error('Falha ao requisitar listagem via buscador');
            }
            throw new Error('Falha do servidor ao requisitar listagem via buscador')
        })
}

export const fetchG1Api = async (search: string) => {
    return g1Scrap.get(encodeURIComponent(search))
        .then(item => {
            return item.data
        })
        .catch(err => {
            console.log(err.message)
            if (isAxiosError(err)) {
                throw new Error('Falha ao requisitar listagem via buscador');
            }
            throw new Error('Falha do servidor ao requisitar listagem via buscador')
        })
}
