import { NewsItem } from "@/pages/api/fetch-news";
import { ISearchMethods } from "./interface";
import * as ch from 'cheerio';
import { fetchDucduckgoScrapApi } from "../api";

export class SearchDuckDuckGo implements ISearchMethods {
    async action(search: string): Promise<NewsItem[]> {
        try {
            const content = await fetchDucduckgoScrapApi(`Notícias sobre ${search}`);
            const $ = ch.load(content);
            const items = $('.result');
    
            if (!items.length) return [];
    
            const news: NewsItem[] = items.map((_, item) => {
                const sourceLink = $('.result__a', item)?.attr('href');
                return {
                    title: $('h2.result__title', item).text().replaceAll(/[\n\t]/g, ' '),
                    sourceLink: sourceLink ? sourceLink.replace(/.+?https%3A%2F%2F/, '') : '',
                    content: $('.result__snippet', item).text()
                }
            }).toArray();
    
            return news.filter(item => !item.title.includes('ads is privacy protected by DuckDuckGo'));
        } catch (error) {
            return [];
        }
    }
}