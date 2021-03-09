import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../../animations/FadeInAnimation';

@Component({
  selector: 'app-grade09',
  templateUrl: './grade09.component.html',
  styleUrls: ['./grade09.component.scss'],
  animations: [fadeInAnimation],
  host:{'[@fadeInAnimation]':''}
})
export class Grade09Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  grd09Lessons() {
    this.router.navigate(['/DashBoard/Grade09Lessons']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd09Papers() {
    this.router.navigate(['/DashBoard/Grade09Papers']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd09Marks() {
    this.router.navigate(['/DashBoard/Grade09Marks']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }
}
