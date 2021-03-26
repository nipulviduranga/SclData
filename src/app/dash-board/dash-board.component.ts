import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './pages/my-class/grade12/grade12-marks/animations';
import {StudentsService} from '../service/students.service';
import {ManageAccountService} from '../service/manage-account.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class DashBoardComponent implements OnInit {

  constructor(private service:StudentsService,private manageAccountService:ManageAccountService) { }
  userName = '';
  ngOnInit(): void {
  var userName=this.service.getUserName();
  this.setUsername(userName);


  }
  isLoggedin=this.service.isloggedin;

  setUsername(data: string){
    if(data != ''){
      this.userName = data;
    }else {
      this.userName = 'User Name';
    }
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  logOut() {
    this.isLoggedin=false;
    this.manageAccountService.logOut();
  }
}
