import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { TicTacService } from '../tictac.service';

@Component({
  selector: 'app-playernameform',
  templateUrl: './playernameform.component.html',
  styleUrls: ['./playernameform.component.css']
})
export class PlayernameformComponent implements OnInit {
  gameStarted = false
  @ViewChild('modal')modal: ElementRef
  constructor(private tictacservice: TicTacService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.tictacservice.gameStatus.subscribe((bool)=>{
      this.gameStarted = bool
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

  onSubmitHandler(nameForm: NgForm){
    if(this.gameStarted){

      this.tictacservice.showAlert.next({
        alertType: 'danger',
        alertmsg: 'name changing is not allowed after game is started!, end the game to change names!'
      })
      return
    }
    
    if(nameForm.valid){
      this.tictacservice.playerNameProvider.next({
        p1: nameForm.value.p1,
        p2: nameForm.value.p2
      })
      this.closeModal()
      nameForm.reset()
    }
    
    else{
      this.tictacservice.showAlert.next({
        alertType: 'danger',
        alertmsg: 'invalid input!'
      })
    }
  }
}
