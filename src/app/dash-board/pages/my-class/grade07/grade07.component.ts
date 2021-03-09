import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../../animations/FadeInAnimation';

@Component({
  selector: 'app-grade07',
  templateUrl: './grade07.component.html',
  styleUrls: ['./grade07.component.scss'],
  animations: [fadeInAnimation],
  host:{'[@fadeInAnimation]':''}
})
export class Grade07Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  grd07Lessons() {
    this.router.navigate(['/DashBoard/Grade07Lessons']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd07Papers() {
    this.router.navigate(['/DashBoard/Grade07Papers']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd07Marks() {
    this.router.navigate(['/DashBoard/Grade07Marks']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }
}
