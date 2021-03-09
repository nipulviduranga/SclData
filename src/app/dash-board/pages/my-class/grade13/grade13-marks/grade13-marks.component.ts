import { Component, OnInit } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {slideInAnimation} from '../../grade12/grade12-marks/animations';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {host} from '@angular-devkit/build-angular/src/test-utils';
import {fadeInAnimation} from '../../../../../animations/FadeInAnimation';

@Component({
  selector: 'app-grade13-marks',
  templateUrl: './grade13-marks.component.html',
  styleUrls: ['./grade13-marks.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ],

})
export class Grade13MarksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
