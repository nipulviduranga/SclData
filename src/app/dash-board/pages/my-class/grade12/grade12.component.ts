import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-grade12',
  templateUrl: './grade12.component.html',
  styleUrls: ['./grade12.component.scss']
})
export class Grade12Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  grd12Lessons() {
    this.router.navigate(['/DashBoard/Grade12Lessons']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd12Papers() {
    this.router.navigate(['/DashBoard/Grade12Papers']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  grd12Marks() {
    this.router.navigate(['/DashBoard/Grade12Marks']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }
}
