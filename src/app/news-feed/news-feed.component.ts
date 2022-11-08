import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from './news-feed.service';
import { NewsModel } from './news.model';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  constructor(private newsfeed: NewsFeedService) { }
  newsset: NewsModel[]
  ngOnInit(): void {
    this.newsfeed.newsParams.subscribe((response: {category: string, query: string})=>{
      console.log(response)
      this.onFetch(response.category, response.query)
    })
  }

  onFetch(category: string, query: string){
    this.newsfeed.fetch(category, query).subscribe(response=>{
      console.log('started')
      this.newsset = response['articles']
      console.log('ended')
      console.log(this.newsset)
    })
  }

  getTime(dateStr: string){
    let date = new Date(dateStr)
    let formatDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
    
    let hour = `${date.getHours().toString().length===1?('0'+date.getHours()):date.getHours()}`
    let minutes = `${date.getMinutes().toString().length===1?('0'+date.getMinutes()):date.getMinutes()}`
    let formatTime = `${hour}:${minutes}`
    
    let today = new Date()
    let TodayDate = `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}`
    
    if (formatDate===TodayDate){
      return `Today at ${formatTime}`
    }
    if (date.getDay()+1 === today.getDay() && date.getFullYear()===today.getFullYear()){
      return `Yesterday at ${formatTime}`
    }
    return `${formatDate} at ${formatTime}`
  } 
}
