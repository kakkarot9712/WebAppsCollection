import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsFeedService } from '../news-feed.service';
import { NewsModel } from '../news.model';

@Component({
  selector: 'app-news-feed-search',
  templateUrl: './news-feed-search.component.html',
  styleUrls: ['./news-feed-search.component.css']
})

export class NewsFeedSearchComponent implements OnInit, OnDestroy {
  resultsFetched = false
  newses: NewsModel[] = []
  fetchparams: {
    searchIn: string, 
    sortBy: string, 
    query: string
  } = null

  pageVisited = 1
  totalResults: number
  constructor(private newsservice: NewsFeedService) { }

  ngOnInit(): void {
    this.newsservice.searchData.subscribe((response)=>{
      this.resetAll()
      this.fetchparams = response
      this.fetchNews(response.searchIn, response.sortBy, response.query)
    })
  }

  resetAll(){
    this.resultsFetched = false
    this.newses = []
    this.fetchparams = null
    this.pageVisited = 1
    this.totalResults = 0
  }
  
  fetchTop(category: string, query: string){
    this.newsservice.fetchTop(category, this.pageVisited, query).subscribe(response => {
      this.newses = response['articles']
      this.totalResults = response['total_hits']
      this.resultsFetched = true
    })
  }

  fetchNews(searchIn: string, 
    sortBy: string, 
    query: string){
    this.newsservice.fetchNew(searchIn, sortBy, this.pageVisited, query).subscribe((response)=>{
      this.newses = response['articles']
      this.totalResults = response['total_hits']
      this.resultsFetched = true
    })
  }

  onNextPage(){
    this.pageVisited++
    this.fetchNews(this.fetchparams.searchIn, this.fetchparams.sortBy, this.fetchparams.query)
  }

  onPrevPage(){
    this.pageVisited--
    this.fetchNews(this.fetchparams.searchIn, this.fetchparams.sortBy, this.fetchparams.query)
  }

  ngOnDestroy(): void {
  }
}
