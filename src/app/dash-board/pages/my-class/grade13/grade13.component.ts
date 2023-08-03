import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../../animations/FadeInAnimation';

@Component({
  selector: 'app-grade13',
  templateUrl: './grade13.component.html',
  styleUrls: ['./grade13.component.scss'],
  animations: [fadeInAnimation],
  host:{'[@fadeInAnimation]':''}
})
export class Grade13Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  grd13Lessons() {
    this.router.navigate(['/DashBoard/Grade13Lessons']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd13Papers() {
    this.router.navigate(['/DashBoard/Grade13Papers']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd13Marks() {
    this.router.navigate(['/DashBoard/Grade13Marks']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }
}
