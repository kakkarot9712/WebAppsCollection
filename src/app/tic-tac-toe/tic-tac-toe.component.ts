import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { TicTacService } from './tictac.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})

export class TicTacToeComponent implements OnInit {

    @ViewChild('modal2')modal: ElementRef
    
    confirmationmsg: string = null
    confirmationType: string = null
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
    
    constructor(private tictacservice: TicTacService, private renderer: Renderer2, private sharedservice: SharedService) { }
    ngOnInit(): void {
        this.tictacservice.playerNameProvider.subscribe((names)=>{
            this.p1_name = names.p1,
            this.p2_name = names.p2

            // First Turn will be of player 1
            this.turnOf = this.p1_name
        })
    }

    openModal(){
        this.renderer.setStyle(this.modal.nativeElement, 'display', 'flex')  
    }
    
    closeModal(){
        this.renderer.setStyle(this.modal.nativeElement, 'display', 'none')  
    }

    dismissModal(event: Event){
        if(event.target===this.modal.nativeElement){
          this.renderer.setStyle(this.modal.nativeElement, 'display', 'none')
        }
    }
    
    resetAll(){
        this.openModal()
        this.confirmationType = 'reset'
        this.confirmationmsg = 'Are you sure? Ending game will reset everything!' 
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
            this.sharedservice.showAlert.next({
                alertType: 'warning',
                alertmsg: 'No more moves Possible, game is tied!'
            })
            this.gameStarted = false
            return
        }
        
        this.sharedservice.showAlert.next({
            alertType: 'success',
            alertmsg: `${player} has won the match!, ${player} has awarded 1 point`
        })

        this.tictacservice.playerWinner.next(player)
        this.tictacservice.turnOf.next(null)
        this.gameStarted = false
    }

    confirmResp(bool: boolean){
        if(bool){
            if(this.confirmationType === 'stop'){
                this.restartGame()
                this.gameStarted = !this.gameStarted
                this.tictacservice.gameStatus.next(true)
            }

            if(this.confirmationType === 'reset'){
                this.sharedservice.showAlert.next({
                    alertType: 'warning',
                    alertmsg: "ending game!, score will be resetted and now you can also change the player names"
                })
                this.restartGame()
                this.tictacservice.gameReset.next(true)
                this.tictacservice.gameStatus.next(false)
                this.tictacservice.turnOf.next(null)
            }
        }

        this.closeModal()
        this.confirmationmsg = null
        this.confirmationType = null
    }

    switchGameStateHandler(){
        if(this.gameStarted){
            this.openModal()
            this.confirmationType = 'stop'
            this.confirmationmsg = "Are you sure? Ending game will reset tic-tac-toe grid"
            return
        }
        this.restartGame()
        this.gameStarted = !this.gameStarted
        this.tictacservice.gameStatus.next(true)
    }

    markdown(event: Event){
        if (!this.gameStarted){
            this.sharedservice.showAlert.next({
                alertType: 'warning',
                alertmsg: "Game is not started! start the game to start playing"
            })
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
                return
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
