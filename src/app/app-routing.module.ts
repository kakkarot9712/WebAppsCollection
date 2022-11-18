import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsFeedFormComponent } from './news-feed/news-feed-form/news-feed-form.component';
import { NewsFeedSearchComponent } from './news-feed/news-feed-search/news-feed-search.component';
import { NewsFeedTopHeadlinesComponent } from './news-feed/news-feed-top-headlines/news-feed-top-headlines.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { WallClockComponent } from './wall-clock/wall-clock.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component: HomeComponent},
  {path:'clock', component: WallClockComponent},
  {path:'tic-tac-toe', component: TicTacToeComponent},
  {path:'newsfeed', component: NewsFeedComponent},
  {path:'newsfeed/search', component: NewsFeedSearchComponent},
  {path:'newsfeed/top-headlines', component: NewsFeedTopHeadlinesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
