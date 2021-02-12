import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
  animations: [
    trigger('sliderLeft', [
      transition('void=> *', [
        style({transform: 'translateX(-100%)'}),
        animate('0.1s')
      ]),
      transition( '* => void', [
        animate('0.1s', style({transform: 'translateX(-100%)'}))
      ])
    ])
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

}
