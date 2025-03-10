import { NewsItem } from "@/pages/api/fetch-news";
import { ISearchMethods } from "./interface";
import * as ch from 'cheerio';
import { fetchG1Api } from "../api";

export class SearchG1 implements ISearchMethods {
    async action(search: string): Promise<NewsItem[]> {
        try {
            const content = await fetchG1Api(search);
            const $ = ch.load(content);
            const items = $('.results__list .widget--info');
    
            if (!items.length) return [];
    
            const news: NewsItem[] = items.map((_, item) => {
                const sourceLink = 'https:' + $('a', item)?.attr('href');
                const title = $('div.widget--info__title', item)?.text();
                return {
                    title: title ? title.replaceAll(/\n/g, '').trim() : '',
                    sourceLink: sourceLink || '',
                    content: ''
                }
            }).toArray();
    
            return news.filter(item => item.title && item.sourceLink.includes('g1.globo.com/'));
        } catch (error) {
            return [];
        }
    }
}