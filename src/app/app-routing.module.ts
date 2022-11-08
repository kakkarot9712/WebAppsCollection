import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { WallClockComponent } from './wall-clock/wall-clock.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component: HomeComponent},
  {path:'clock', component: WallClockComponent},
  {path:'tic-tac-toe', component: TicTacToeComponent},
  {path:'newsfeed', component: NewsFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
