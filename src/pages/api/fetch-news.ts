import { isValidSearch } from "@/components/search/helper";
import { scrap } from "@/scrapper";
import { NextApiRequest, NextApiResponse } from "next";

export type NewsItem = {
    title: string
    content: string
    sourceLink: string
}

export type NewsResponse = {
    message: string
    content: NewsItem[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let news: NewsItem[] = [];
    const search = req.query?.search;
    
    if (!search) return res.status(400).json({
        message: 'Busca inválida. Adicione algo para ser encontrado',
        content: news
    })
    
    if (Array.isArray(search) || !isValidSearch(search)) return res.status(400).json({
        message: 'Formato de busca incorreta enviada',
        content: news
    })

    news = await scrap(search);

    if (!news.length) {
        return res.status(404).json({
            message: 'Nenhum resultado encontrado',
            content: news
        })
    }
    return res.status(200).json({
        message: 'Sucesso!',
        content: news
    })
}