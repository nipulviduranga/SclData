import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-grade11',
  templateUrl: './grade11.component.html',
  styleUrls: ['./grade11.component.scss']
})
export class Grade11Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  grd11Lessons() {
    this.router.navigate(['/DashBoard/Grade11Lessons']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd11Papers() {
    this.router.navigate(['/DashBoard/Grade11Papers']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd11Marks() {
    this.router.navigate(['/DashBoard/Grade11Marks']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }
}
