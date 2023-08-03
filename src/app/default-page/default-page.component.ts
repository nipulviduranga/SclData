import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/Login']).then();
  }

  dashboard() {
    this.router.navigate(['/DashBoard']).then();
  }
}
