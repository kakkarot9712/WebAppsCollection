import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-wall-clock',
  templateUrl: './wall-clock.component.html',
  styleUrls: ['./wall-clock.component.css']
})
export class WallClockComponent implements OnInit, AfterViewInit {

  @ViewChild('hour')hourRef: ElementRef
  @ViewChild('minute')minuteREf : ElementRef
  @ViewChild('second')secondRef: ElementRef
  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    let minute = this.minuteREf.nativeElement
    let hour = this.hourRef.nativeElement
    let second = this.secondRef.nativeElement
    setInterval(() => {
      let currentDate = new Date()
      let currentSeconds = currentDate.getSeconds()
      let currentMinutes = currentDate.getMinutes()
      let currentHour = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours()
      let secondDegree = currentSeconds * 6
      this.renderer.setStyle(second, 'rotate', `${secondDegree}deg`)
      let minuteDegree = (currentMinutes * 60 + currentSeconds) * 0.1
      this.renderer.setStyle(minute, 'rotate', `${minuteDegree}deg`)
      let hourDegree = (currentHour * 60 + currentMinutes) * 0.5
      this.renderer.setStyle(hour, 'rotate', `${hourDegree}deg`)
  }, 1000)
  }
}
