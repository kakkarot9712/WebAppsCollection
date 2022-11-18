import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TicTacService } from '../tictac.service';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit, OnDestroy {

  turnOf = 'player1'
  player1 = 'player1'
  player2 = 'player2'  
  p1_score = 0
  p2_score = 0
  gamesPlayed = 0
  playerNameReceiver: Subscription
  playerWinnerReceiver: Subscription
  gameResetObserver: Subscription
  turnOfTracker: Subscription

  constructor(private tictacservice: TicTacService) { }

  ngOnInit(): void {
    this.playerNameReceiver = this.tictacservice.playerNameProvider.subscribe((pName)=>{
      this.player1 = pName.p1
      this.player2 = pName.p2
    })
    this.playerWinnerReceiver = this.tictacservice.playerWinner.subscribe((player)=>{
      player===this.player1?this.p1_score++:this.p2_score++
      this.gamesPlayed++
    })
    this.gameResetObserver = this.tictacservice.gameReset.subscribe(bool=>{this.p1_score = this.p2_score = this.gamesPlayed = 0})
    this.turnOfTracker = this.tictacservice.turnOf.subscribe(response=>{this.turnOf = response}) 
  }

  ngOnDestroy(): void {
    this.gameResetObserver.unsubscribe()
    this.playerNameReceiver.unsubscribe()
    this.playerWinnerReceiver.unsubscribe()
    this.turnOfTracker.unsubscribe()
  }
}
