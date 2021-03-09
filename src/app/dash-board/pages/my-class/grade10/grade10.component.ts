import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../../animations/FadeInAnimation';

@Component({
  selector: 'app-grade10',
  templateUrl: './grade10.component.html',
  styleUrls: ['./grade10.component.scss'],
  animations: [fadeInAnimation],
  host:{'[@fadeInAnimation]':''}
})
export class Grade10Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  grd10Lessons() {
    this.router.navigate(['/DashBoard/Grade10Lessons']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd10Papers() {
    this.router.navigate(['/DashBoard/Grade10Papers']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd10Marks() {
    this.router.navigate(['/DashBoard/Grade10Marks']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }
}
