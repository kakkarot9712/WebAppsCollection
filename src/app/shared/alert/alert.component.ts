import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input('msg') alertmsg: string
  @Input() alertType: string

  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.sharedservice.showAlert.subscribe((response)=>{
      this.alertType = response.alertType
      this.alertmsg = response.alertmsg
      setTimeout(()=>{
        this.alertType = null
        this.alertmsg = null
      }, 4000)
    })
  }
}
