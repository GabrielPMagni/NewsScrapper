import { NewsItem } from "@/pages/api/fetch-news";
import { ISearchMethods } from "./interface";
import * as ch from 'cheerio';
import { fetchCnnApi } from "../api";

export class SearchCnn implements ISearchMethods {
    async action(search: string): Promise<NewsItem[]> {
        try {
            const content = await fetchCnnApi(search);
            const $ = ch.load(content);
            const items = $('.home__list__item');
    
            if (!items.length) return [];
    
            const news: NewsItem[] = items.map((_, item) => {
                const sourceLink = $('a.home__list__tag', item)?.attr('href');
                const title = $('.home__list__tag', item)?.attr('title');
                return {
                    title: title || '',
                    sourceLink: sourceLink || '',
                    content: ''
                }
            }).toArray();
    
            return news.filter(item => item.title && item.sourceLink.includes('https://www.cnnbrasil.com.br/'));
        } catch (error) {
            return [];
        }
    }
}