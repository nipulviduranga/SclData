import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../../animations/FadeInAnimation';

@Component({
  selector: 'app-grade06',
  templateUrl: './grade06.component.html',
  styleUrls: ['./grade06.component.scss'],
  animations: [fadeInAnimation],
  host:{'[@fadeInAnimation]':''}
})
export class Grade06Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  grd06Lessons() {
    this.router.navigate(['/DashBoard/Grade06Lessons']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd06Papers() {
    this.router.navigate(['/DashBoard/Grade06Papers']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd06Marks() {
    this.router.navigate(['/DashBoard/Grade06Marks']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }
}
