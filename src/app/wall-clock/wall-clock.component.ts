import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-wall-clock',
  templateUrl: './wall-clock.component.html',
  styleUrls: ['./wall-clock.component.css']
})
export class WallClockComponent implements OnInit {
  minute!: HTMLElement
  hour!: HTMLElement
  second!: HTMLElement
  constructor(private renderer: Renderer2) { 

  }

  ngOnInit(): void {
    this.minute = document.getElementById('minute')
    this.hour = document.getElementById('hour')
    this.second = document.getElementById('second')
    setInterval(() => {
      let currentDate = new Date()
      let currentSeconds = currentDate.getSeconds()
      let currentMinutes = currentDate.getMinutes()
      let currentHour = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours()
  
      let secondDegree = currentSeconds * 6
      this.renderer.setStyle(this.second, 'rotate', `${secondDegree}deg`)
      let minuteDegree = (currentMinutes * 60 + currentSeconds) * 0.1
      this.renderer.setStyle(this.minute, 'rotate', `${minuteDegree}deg`)
      let hourDegree = (currentHour * 3600 + currentSeconds) * 0.0083
      this.renderer.setStyle(this.hour, 'rotate', `${hourDegree}deg`)
  }, 1000)
  }
  
}
