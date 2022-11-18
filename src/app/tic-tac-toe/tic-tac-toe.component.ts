import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TicTacService } from './tictac.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
})
export class TicTacToeComponent implements OnInit {
    
    DUMMY_ARRAY = [0, 0, 0]

    // 0 is empty cell (yet to select)
    // 1 is Cross (selected by player 1)
    // 2 is Circle (selected by player 2)
    markergrid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    gameStarted = false
    gamesPlayed = 0
    
    // Win condition checking will happen only after 5 moves.
    movesPlayed = 0
    p1_name = 'player1'
    p2_name = 'player2'
    turnOf = 'player1'
    
    constructor(private tictacservice: TicTacService) { }
    ngOnInit(): void {
        this.tictacservice.playerNameProvider.subscribe((names)=>{
            this.p1_name = names.p1,
            this.p2_name = names.p2

            // First Turn will be of player 1
            this.turnOf = this.p1_name
        })
    }

    resetAll(){
        alert("ending game!, score will be resetted and now you can also change the player names")
        this.restartGame()
        this.tictacservice.gameReset.next(true)
        this.tictacservice.gameStatus.next(false)
        this.tictacservice.turnOf.next(null) 
    }

    restartGame(){
        this.movesPlayed = 0
        this.markergrid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.turnOf = this.p1_name
        this.tictacservice.turnOf.next(this.turnOf) 
        Array.from(document.getElementsByClassName("rounded")).forEach((img: HTMLImageElement) => {
            img.src = '../assets/placeholder.png';
        });
    }

    declareWinner(player: string){
        if (player === null){
            alert('No more moves Possible, game is tied!')
            console.log('No winner is found!')
            this.gameStarted = false
            return
        }
        this.tictacservice.playerWinner.next(player)
        this.tictacservice.turnOf.next(null)
        this.gameStarted = false
    }

    switchGameStateHandler(){
        if(this.gameStarted){
            let isCofirmed = confirm("Are you sure? Enfing game will reset tic-tac-toe grid")
            console.log(isCofirmed)
            if (!isCofirmed) {
                return
            }
        }
        this.restartGame()
        this.gameStarted = !this.gameStarted
        this.tictacservice.gameStatus.next(true)
    }

    markdown(event: Event){
        if (!this.gameStarted){
            alert("Game is not started! start the game to start playing")
            return
        }
        if (this.markergrid[event.target['id']] !== 0){
            console.warn("invalid move, terminated")
            return
        }
        this.movesPlayed++
        event.target['src'] = (this.turnOf === this.p1_name)?'../assets/cross.png':'../assets/circle.png';
        this.markergrid[+event.target['id']] = (this.turnOf===this.p1_name)?1:2
        if (this.movesPlayed>=5){
            if(this.tictacservice.isWinner(this.markergrid)){
                this.declareWinner(this.turnOf)
            }
        }
        if(this.movesPlayed === 9){
            this.declareWinner(null)
            return
        }
        this.turnOf = (this.turnOf===this.p1_name)?this.p2_name:this.p1_name
        this.tictacservice.turnOf.next(this.turnOf)
    }
}

