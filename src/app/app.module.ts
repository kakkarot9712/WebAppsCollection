import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { WallClockComponent } from './wall-clock/wall-clock.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { PlayernameformComponent } from './tic-tac-toe/playernameform/playernameform.component';
import { ScoreCardComponent } from './tic-tac-toe/score-card/score-card.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsFeedFormComponent } from './news-feed/news-feed-form/news-feed-form.component';
import { NewsFeedSearchComponent } from './news-feed/news-feed-search/news-feed-search.component';
import { NewsFeedTopHeadlinesComponent } from './news-feed/news-feed-top-headlines/news-feed-top-headlines.component';
import { NewsFeedCardComponent } from './news-feed/news-feed-card/news-feed-card.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './shared/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DropDownDirective,
    WallClockComponent,
    TicTacToeComponent,
    PlayernameformComponent,
    ScoreCardComponent,
    NewsFeedComponent,
    NewsFeedFormComponent,
    NewsFeedSearchComponent,
    NewsFeedTopHeadlinesComponent,
    NewsFeedCardComponent,
    FooterComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
