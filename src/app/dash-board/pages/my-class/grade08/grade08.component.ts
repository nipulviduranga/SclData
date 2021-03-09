import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../../animations/FadeInAnimation';

@Component({
  selector: 'app-grade08',
  templateUrl: './grade08.component.html',
  styleUrls: ['./grade08.component.scss'],
  animations: [fadeInAnimation],
  host:{'[@fadeInAnimation]':''}
})
export class Grade08Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  grd08Lessons() {
    this.router.navigate(['/DashBoard/Grade08Lessons']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd08Papers() {
    this.router.navigate(['/DashBoard/Grade08Papers']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd08Marks() {
    this.router.navigate(['/DashBoard/Grade08Marks']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }
}
