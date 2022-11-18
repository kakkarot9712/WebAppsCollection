import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../news-feed.service';
import { NewsModel } from '../news.model';

@Component({
  selector: 'app-news-feed-top-headlines',
  templateUrl: './news-feed-top-headlines.component.html',
  styleUrls: ['./news-feed-top-headlines.component.css']
})
export class NewsFeedTopHeadlinesComponent implements OnInit {
  resultsFetched = false
  newses: NewsModel[] = []
  fetchparams: {
    category: string,
    query: string
  } = null
  
  pageVisited = 1
  totalResults: number
  constructor(private newsservice: NewsFeedService) { }

  ngOnInit(): void {
    this.newsservice.TopData.subscribe((response)=>{
      this.resetAll()
      this.fetchparams = response
      this.fetchTop(response.category, response.query)
    })
  }
  
  fetchTop(category: string, query: string){
    this.newsservice.fetchTop(category, this.pageVisited, query).subscribe(response => {
      this.newses = response['articles']
      this.totalResults = response['totalResults']
      this.resultsFetched = true
    })
  }

  resetAll(){
    this.resultsFetched = false
    this.newses = []
    this.fetchparams = null
    this.pageVisited = 1
    this.totalResults = 0
  }

  onNextPage(){
    this.pageVisited++
    this.fetchTop(this.fetchparams.category, this.fetchparams.query)  
  }

  onPrevPage(){
    this.pageVisited--
    this.fetchTop(this.fetchparams.category, this.fetchparams.query)
  }

  ngOnDestroy(): void {
    console.log('dest')
  }
}
