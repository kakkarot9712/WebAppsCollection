import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Subject } from "rxjs";

interface sourceModel {
    category: string,
    country: string,
    description: string,
    id: string,
    language: string,
    name: string,
    url : string
}

@Injectable({providedIn:'root'})

export class NewsFeedService{
    private recommanded = ['news', 'sport', 'tech', 'world', 'finance','politics', 'business', 'economics', 'entertainment', 'beauty', 'travel', 'music', 'food', 'science', 'gaming', 'energy']
    private sortBy = ['relevancy', 'rank', 'date']
    private searchIn = ['title', 'summary']

    TopData = new Subject<{category: string, query: string}>()
    searchData = new Subject<{searchIn: string, sortBy: string, query: string}>()

    constructor(private http: HttpClient){}
    fetchNew(searchIn: string, sortBy: string, pageNo: number, query: string){
        return this.http.get(`https://api.newscatcherapi.com/v2/search`, {
            headers: {
                'x-api-key': environment.newsapi
            },
            params: new HttpParams().appendAll({
                q: query,
                search_in: searchIn,
                lang: 'en',
                page_size: 15,
                page: pageNo,
                ranked_only: true,
                sort_by: sortBy,
                not_sources: 'dailymail.co.uk'
            })
        })
    }

    fetchTop(category: string, pageNo: number, query: string){
        return this.http.get('https://api.newscatcherapi.com/v2/latest_headlines', {
            headers: {
                'x-api-key': environment.newsapi
            },
            params: new HttpParams().appendAll({
                topic: category,
                countries: ['IN','US'],
                lang: 'en',
                page: pageNo,
                page_size: 15,
                ranked_only: true,
                not_sources: 'dailymail.co.uk'
            })
        })
    }

    get availableRecommandation(){
        return this.recommanded.slice()
    }

    getScopes(){
        return this.searchIn.slice()
    }

    getSortBy(){
        return this.sortBy.slice()
    }
}
