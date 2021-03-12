import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../service/students.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  username: '';
  password: '';
  passwordre: '';

  constructor(private service: StudentsService) { }

  ngOnInit(): void {

  }

  registerUser() {
    if(this.password===this.passwordre){
      this.service.registerUser(this.username,this.password).subscribe(result=>{
        console.log(result)
        if(result.message !='Already Exist') {
          alert('Registered');
        }else {
          alert('User Name Already Exist ');
        }
      });
    }else {
      alert('Password doesn\'t Match!');
    }
  }
}
