import { Component, Input, OnInit } from '@angular/core';
import { TicTacService } from 'src/app/tic-tac-toe/tictac.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input('msg') alertmsg: string
  @Input() alertType: string

  constructor(private tictacservice: TicTacService) { }

  ngOnInit(): void {
    this.tictacservice.showAlert.subscribe((response)=>{
      this.alertType = response.alertType
      this.alertmsg = response.alertmsg
      setTimeout(()=>{
        this.alertType = null
        this.alertmsg = null
      }, 4000)
    })
  }
}
