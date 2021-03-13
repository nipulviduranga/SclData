import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as React from 'react';
import {StudentsService} from '../service/students.service';
import {CookieService} from 'ngx-cookie';
import UserNameDTO from '../dto/UserNameDTO';
import {DashBoardComponent} from '../dash-board/dash-board.component';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  username='';
  password='';
  constructor(public service: StudentsService,private cookieService:CookieService,private router:Router,private dashboard:DashBoardComponent) { }



  ngOnInit(): void {
    const UserName = new UserNameDTO(this.username);
    this.dashboard.setUsername(UserName);
  }


  LoginUser() {
  this.service.loginUser(this.username,this.password).subscribe(resp=>{
    console.log(resp);
    if(resp.message==='success'){
      const todayDate=new Date();
      const tomorrow = new Date(todayDate);
      tomorrow.setDate(tomorrow.getDate()+1);
      const cookieOption={
        expires: tomorrow
      };

      this.cookieService.put('tokenData',resp.token, cookieOption);
      this.router.navigate(['/DashBoard/MyClass']).then();

    }else {
      alert('Please Try Again');
    }
    },error => {
   console.log(error);

  });
  }
}
