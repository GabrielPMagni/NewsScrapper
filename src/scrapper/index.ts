import { NewsItem } from '@/pages/api/fetch-news';
import { ISearchMethods } from './methods/interface';
import { SearchCnn } from './methods/cnn';
import { SearchG1 } from './methods/g1';
import { randomSortArray } from '@/helpers/GeneralFunctions';

export const scrap = async (search: string): Promise<NewsItem[]> => {
    let news: NewsItem[] = [];

    const newsSourceClasses: ISearchMethods[] = [
        new SearchCnn(),
        new SearchG1(),
    ]

    for await (const item of newsSourceClasses) {
        news.push(...await item.action(search))
    }

    return randomSortArray(news);
}