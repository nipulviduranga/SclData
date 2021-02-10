import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as React from 'react';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }



  accessDashboard() {
    this.router.navigate(['/DashBoard']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }
  username='';
  password='';

  ngOnInit(): void {
  }
}
