import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as React from 'react';
import {StudentsService} from '../service/students.service';
import {CookieService} from 'ngx-cookie';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  username='';
  password='';
  constructor(public service: StudentsService,private cookieService:CookieService) { }



  ngOnInit(): void {
  }


  LoginUser() {
  this.service.loginUser(this.username,this.password).subscribe(resp=>{
    if(resp.message==='sucess'){
      const todayDate=new Date();
      const nextweek = new Date(todayDate);
      nextweek.setDate(nextweek.getDate()+7);
      const cookieOption={
        expires:nextweek
      };

      this.cookieService.put('tokenData',resp.token,cookieOption);
      alert('Success');

    }else {
      alert('Please Try Again');
    }
    },error => {
   console.log(error);

  });
  }
}
