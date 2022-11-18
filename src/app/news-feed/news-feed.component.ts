import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsFeedService } from './news-feed.service';
import { NewsModel } from './news.model';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
})
export class NewsFeedComponent implements OnInit {
  
  constructor(private router: Router, private route: ActivatedRoute) { } 
  ngOnInit(): void {
  }

  goto(path: string){
    this.router.navigate([path], {relativeTo: this.route})
  }
}
