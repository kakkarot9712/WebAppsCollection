import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { TicTacService } from '../tictac.service';

@Component({
  selector: 'app-playernameform',
  templateUrl: './playernameform.component.html',
  styleUrls: ['./playernameform.component.css']
})
export class PlayernameformComponent implements OnInit {
  gameStarted = false
  constructor(private tictacservice: TicTacService) { }

  ngOnInit(): void {
    this.tictacservice.gameStatus.subscribe((bool)=>{
      this.gameStarted = bool
      console.log(bool)
    })
  }

  onSubmitHandler(nameForm: NgForm){
    if(this.gameStarted){
      alert('name changing is not allowed after game is started!, end the game to change names!')
      return
    }
    
    if(nameForm.valid){
      this.tictacservice.playerNameProvider.next({
        p1: nameForm.value.p1,
        p2: nameForm.value.p2
      })
      nameForm.reset()
    }
    else{
      console.error('invalid input!')
    }
  }
}
