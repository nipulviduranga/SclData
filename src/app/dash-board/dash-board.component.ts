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

  leftSideVisibleState = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSlide() {
/*
     if (this.leftSideVisibleState){
       this.leftSideVisibleState=false;
     }else{
       this.leftSideVisibleState=true;
     }
*/

    this.leftSideVisibleState = !this.leftSideVisibleState;
  }
 /* @HostListener('document:click')
  clickInside() {
    if (this.leftSideVisibleState === true) {

      console.log(this.leftSideVisibleState);
    }
  }*/

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
