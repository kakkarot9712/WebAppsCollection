import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewsFeedService } from '../news-feed.service';

@Component({
  selector: 'app-news-feed-form',
  templateUrl: './news-feed-form.component.html',
})
export class NewsFeedFormComponent implements OnInit {
  categories: string[]
  searchScopes: string[]
  sortsBy: string[]
  formType: string = 'top-headlines'

  constructor(private newsservice: NewsFeedService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.searchScopes = this.newsservice.getScopes()
    this.categories = this.newsservice.availableRecommandation
    this.sortsBy = this.newsservice.getSortBy()
    this.route.url.subscribe((url)=>{
      this.formType = url[1].path
    })
  }

  submitForm(newsForm: NgForm){
    console.log(newsForm)
    let queries = 'india'
    if(this.formType==='search'){
      if(newsForm.value.clearDefaultQuery){
        queries = ''
      }
      this.newsservice.searchData.next({
        searchIn: newsForm.value.searchIn,
        sortBy: newsForm.value.sortBy,
        query: queries===''?`${newsForm.value.query}`:`${queries}, ${newsForm.value.query}`
      })
    }
    else{
      this.newsservice.TopData.next({
        category: newsForm.value.category,
        query: newsForm.value.query
      })
    }
 }
}
