import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {fadeInAnimation} from '../../../animations/FadeInAnimation';

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
  styleUrls: ['./my-class.component.scss'],
  animations: [fadeInAnimation]
})
export class MyClassComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  grd6() {
    this.router.navigate(['/DashBoard/Grade06']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
    /*this.markmenue = true;*/
  }

  grd7() {
    this.router.navigate(['/DashBoard/Grade07']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
    /*this.markmenue = true;*/
  }

  grd8() {
    this.router.navigate(['/DashBoard/Grade08']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
    /*this.markmenue = true;*/
  }

  grd9() {
    this.router.navigate(['/DashBoard/Grade09']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
    /*this.markmenue = true;*/
  }

  grd10() {
    this.router.navigate(['/DashBoard/Grade10']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
    /*this.markmenue = true;*/
  }

  grd11() {
    this.router.navigate(['/DashBoard/Grade11']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
    /*this.markmenue = true;*/
  }

  grd12() {
    this.router.navigate(['/DashBoard/Grade12']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
    /*this.markmenue = true;*/
  }

  grd13() {
    this.router.navigate(['/DashBoard/Grade13']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);

    });
    /*this.markmenue = true;*/
  }
}
