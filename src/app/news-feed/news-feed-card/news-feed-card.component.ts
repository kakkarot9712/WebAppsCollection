import { Component, OnInit, Input } from '@angular/core';
import { NewsFeedService } from '../news-feed.service';
import { NewsModel } from '../news.model';

@Component({
  selector: 'app-news-feed-card',
  templateUrl: './news-feed-card.component.html',
  styleUrls: ['./news-feed-card.component.css']
})
export class NewsFeedCardComponent implements OnInit {
  constructor(private newsfeed: NewsFeedService) { }
  newsset: NewsModel[]
  @Input('newsData')news: NewsModel
  
  ngOnInit(): void {
  }

  getTime(dateStr: string){
    let date = new Date(dateStr)
    let formatDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    
    let hour = `${date.getHours().toString().length===1?('0'+date.getHours()):date.getHours()}`
    let minutes = `${date.getMinutes().toString().length===1?('0'+date.getMinutes()):date.getMinutes()}`
    let formatTime = `${hour}:${minutes}`
    
    let today = new Date()
    let TodayDate = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
    
    if (formatDate===TodayDate){
      return `Today at ${formatTime}`
    }
    if (date.getDate()+1 === today.getDate() && date.getFullYear()===today.getFullYear()){
      return `Yesterday at ${formatTime}`
    }
    return `${formatDate} at ${formatTime}`
  } }
