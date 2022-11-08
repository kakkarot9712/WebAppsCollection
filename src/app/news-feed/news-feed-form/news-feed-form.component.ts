import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsFeedService } from '../news-feed.service';

@Component({
  selector: 'app-news-feed-form',
  templateUrl: './news-feed-form.component.html',
  styleUrls: ['./news-feed-form.component.css']
})
export class NewsFeedFormComponent implements OnInit {
  categories: string[]
  constructor(private newsservice: NewsFeedService) { 

  }

  ngOnInit(): void {
    this.categories = this.newsservice.availableCategories
  }

  submitForm(newsForm: NgForm){
    this.newsservice.newsParams.next({...newsForm.value, query: newsForm.value.query.toLowerCase()})
  }

  getCategories(){
    console.log(this.newsservice.availableCategories)
  } 
}
