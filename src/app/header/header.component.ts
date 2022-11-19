import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  currentLocation = 'Home'
  constructor() { }
  getlog(resp: string){
    console.log(resp)
    return 'item'
  }

  ngOnInit(): void {
  }
}
