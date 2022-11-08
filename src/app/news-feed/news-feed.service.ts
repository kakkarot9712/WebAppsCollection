import { Injectable } from "@angular/core";
import { NewsModel } from "./news.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Subject } from "rxjs";

interface sourceModel{
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
    private news : NewsModel[] = []
    private categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']
    newsParams = new Subject<{category: string, query: string}>()

    constructor(private http: HttpClient){}
    fetch(category: string, query: string){
        return this.http.get(`https://newsapi.org/v2/top-headlines`, {
            params: new HttpParams().appendAll({
                q: query,
                country: 'in',
                category: category,
                apiKey: environment.newsapi
            })
        })
    }

    get availableCategories(){
        return this.categories
    }
}