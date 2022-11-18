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
    private recommanded = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']
    private sortBy = ['relevancy', 'popularity', 'publishedAt']
    private searchIn = ['title', 'description', 'content']

    TopData = new Subject<{category: string, query: string}>()
    searchData = new Subject<{searchIn: string, sortBy: string, query: string}>()

    constructor(private http: HttpClient){}
    fetchNew(searchIn: string, sortBy: string, pageNo: number, query: string){
        return this.http.get(`https://newsapi.org/v2/everything`, {
            params: new HttpParams().appendAll({
                q: query,
                searchIn: searchIn,
                language: 'en',
                pageSize: 15,
                page: pageNo,
                from: '2022-11-11',
                to:'2022-11-18',
                sortBy: sortBy,
                excludeDomains: 'visual.ly',
                apiKey: environment.newsapi
            })
        })
    }

    fetchTop(category: string, pageNo: number, query: string){
        return this.http.get(`https://newsapi.org/v2/top-headlines`, {
            params: new HttpParams().appendAll({
                q: query,
                category: category,
                country: 'in',
                page: pageNo,
                pageSize: 15,
                apiKey: environment.newsapi
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
