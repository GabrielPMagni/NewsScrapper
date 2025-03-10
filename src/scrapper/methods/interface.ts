import { NewsItem } from "@/pages/api/fetch-news";

export interface ISearchMethods {
    action(content: any): Promise<NewsItem[]>;
}