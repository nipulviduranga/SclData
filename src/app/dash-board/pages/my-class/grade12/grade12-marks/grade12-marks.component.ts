import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from '../../../../../service/students.service';
import studentDTO from '../../../../../dto/student10to11DTO';
import {slideInAnimation} from './animations';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-grade12-marks',
  templateUrl: './grade12-marks.component.html',
  styleUrls: ['./grade12-marks.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class Grade12MarksComponent implements OnInit {
  @ViewChild('first', {read: ElementRef}) firstName: ElementRef<HTMLElement>;

  constructor(private studentsService: StudentsService) { }
  // dropdown data


  ngOnInit(): void {

  }



  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
