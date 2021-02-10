import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {HomeComponent} from './dash-board/pages/home/home.component';
import {TimeTablesComponent} from './dash-board/pages/time-tables/time-tables.component';
import {MarksComponent} from './dash-board/pages/marks/marks.component';
import {NewsAndEventsComponent} from './dash-board/pages/news-and-events/news-and-events.component';
import {AboutComponent} from './dash-board/pages/about/about.component';
import {SignOutComponent} from './dash-board/pages/sign-out/sign-out.component';
import {DefaultPageComponent} from './dash-board/pages/default-page/default-page.component';


const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'DashBoard',component:DashBoardComponent,
    children:[
      {path:'',component:DefaultPageComponent},
      {path:'Home',component:HomeComponent},
      {path:'TimeTables',component:TimeTablesComponent},
      {path:'Marks',component:MarksComponent},
      {path:'NewsAndEvents',component:NewsAndEventsComponent},
      {path:'About',component:AboutComponent},
      {path:'logout',component:SignOutComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
