import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './pages/my-class/grade12/grade12-marks/animations';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class DashBoardComponent implements OnInit {

  constructor() { }
  userName = '';
  ngOnInit(): void {



  }
  setUsername(dto: any){
    if(dto.username != ''){
      this.userName = dto.username;
    }else {
      this.userName = 'User Name';
    }
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
