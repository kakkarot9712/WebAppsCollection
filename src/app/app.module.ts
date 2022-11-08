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
