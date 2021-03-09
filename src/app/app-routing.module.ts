import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {HomeComponent} from './dash-board/pages/home/home.component';
import {TimeTablesComponent} from './dash-board/pages/time-tables/time-tables.component';

import {NewsAndEventsComponent} from './dash-board/pages/news-and-events/news-and-events.component';
import {AboutComponent} from './dash-board/pages/about/about.component';
import {SignOutComponent} from './dash-board/pages/sign-out/sign-out.component';
import {DefaultPageComponent} from './dash-board/pages/default-page/default-page.component';
import {MyClassComponent} from './dash-board/pages/my-class/my-class.component';
import {Grade06Component} from './dash-board/pages/my-class/grade06/grade06.component';
import {Grade07Component} from './dash-board/pages/my-class/grade07/grade07.component';
import {Grade08Component} from './dash-board/pages/my-class/grade08/grade08.component';
import {Grade09Component} from './dash-board/pages/my-class/grade09/grade09.component';
import {Grade10Component} from './dash-board/pages/my-class/grade10/grade10.component';
import {Grade11Component} from './dash-board/pages/my-class/grade11/grade11.component';
import {Grade12Component} from './dash-board/pages/my-class/grade12/grade12.component';
import {Grade13Component} from './dash-board/pages/my-class/grade13/grade13.component';
import {Grade06LessonsComponent} from './dash-board/pages/my-class/grade06/grade06-lessons/grade06-lessons.component';
import {Grade06PapersComponent} from './dash-board/pages/my-class/grade06/grade06-papers/grade06-papers.component';
import {Grade06MarksComponent} from './dash-board/pages/my-class/grade06/grade06-marks/grade06-marks.component';
import {Grade07LessonsComponent} from './dash-board/pages/my-class/grade07/grade07-lessons/grade07-lessons.component';
import {Grade07PapersComponent} from './dash-board/pages/my-class/grade07/grade07-papers/grade07-papers.component';
import {Grade07MarksComponent} from './dash-board/pages/my-class/grade07/grade07-marks/grade07-marks.component';
import {Grade08LessonsComponent} from './dash-board/pages/my-class/grade08/grade08-lessons/grade08-lessons.component';
import {Grade08PapersComponent} from './dash-board/pages/my-class/grade08/grade08-papers/grade08-papers.component';
import {Grade08MarksComponent} from './dash-board/pages/my-class/grade08/grade08-marks/grade08-marks.component';
import {Grade09LessonsComponent} from './dash-board/pages/my-class/grade09/grade09-lessons/grade09-lessons.component';
import {Grade09PapersComponent} from './dash-board/pages/my-class/grade09/grade09-papers/grade09-papers.component';
import {Grade09MarksComponent} from './dash-board/pages/my-class/grade09/grade09-marks/grade09-marks.component';
import {Grade10LessonsComponent} from './dash-board/pages/my-class/grade10/grade10-lessons/grade10-lessons.component';
import {Grade10PapersComponent} from './dash-board/pages/my-class/grade10/grade10-papers/grade10-papers.component';
import {Grade10MarksComponent} from './dash-board/pages/my-class/grade10/grade10-marks/grade10-marks.component';
import {Grade11LessonsComponent} from './dash-board/pages/my-class/grade11/grade11-lessons/grade11-lessons.component';
import {Grade11PapersComponent} from './dash-board/pages/my-class/grade11/grade11-papers/grade11-papers.component';
import {Grade11MarksComponent} from './dash-board/pages/my-class/grade11/grade11-marks/grade11-marks.component';
import {Grade12LessonsComponent} from './dash-board/pages/my-class/grade12/grade12-lessons/grade12-lessons.component';
import {Grade12PapersComponent} from './dash-board/pages/my-class/grade12/grade12-papers/grade12-papers.component';
import {Grade12MarksComponent} from './dash-board/pages/my-class/grade12/grade12-marks/grade12-marks.component';
import {Grade13LessonsComponent} from './dash-board/pages/my-class/grade13/grade13-lessons/grade13-lessons.component';
import {Grade13PapersComponent} from './dash-board/pages/my-class/grade13/grade13-papers/grade13-papers.component';
import {Grade13MarksComponent} from './dash-board/pages/my-class/grade13/grade13-marks/grade13-marks.component';
import {ArtMarksComponent} from './dash-board/pages/my-class/grade12/grade12-marks/art-marks/art-marks.component';
import {CommerceMarksComponent} from './dash-board/pages/my-class/grade12/grade12-marks/commerce-marks/commerce-marks.component';
import {TecMarksComponent} from './dash-board/pages/my-class/grade12/grade12-marks/tec-marks/tec-marks.component';
import {MathsMarksComponent} from './dash-board/pages/my-class/grade12/grade12-marks/maths-marks/maths-marks.component';
import {BioMarksComponent} from './dash-board/pages/my-class/grade12/grade12-marks/bio-marks/bio-marks.component';
import {Art13MarksComponent} from './dash-board/pages/my-class/grade13/grade13-marks/art-marks13/art13-marks.component';
import {Commerce13MarksComponent} from './dash-board/pages/my-class/grade13/grade13-marks/commerce13-marks/commerce13-marks.component';
import {Tec13MarksComponent} from './dash-board/pages/my-class/grade13/grade13-marks/tec13-marks/tec13-marks.component';
import {Maths13MarksComponent} from './dash-board/pages/my-class/grade13/grade13-marks/maths13-marks/maths13-marks.component';
import {Bio13MarksComponent} from './dash-board/pages/my-class/grade13/grade13-marks/bio13-marks/bio13-marks.component';
const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'DashBoard',component:DashBoardComponent,
    children:[
      {path:'',component:DefaultPageComponent,data:{animation:'DefaultPage'}},
      {path:'Home',component:HomeComponent,data:{animation:'HomePage'}},
      {path:'TimeTables',component:TimeTablesComponent,data:{animation:'TimeTablesPage'}},
      {path:'MyClass',component:MyClassComponent,data:{animation:'MyclassPage'}},
           {path:"Grade06",component:Grade06Component},
                {path:"Grade06Lessons",component:Grade06LessonsComponent},
                {path:"Grade06Papers",component:Grade06PapersComponent},
                {path:"Grade06Marks",component:Grade06MarksComponent},
          {path:"Grade07",component:Grade07Component},
                {path:"Grade07Lessons",component:Grade07LessonsComponent},
                {path:"Grade07Papers",component:Grade07PapersComponent},
                {path:"Grade07Marks",component:Grade07MarksComponent},
          {path:"Grade08",component:Grade08Component},
                {path:"Grade08Lessons",component:Grade08LessonsComponent},
                {path:"Grade08Papers",component:Grade08PapersComponent},
                {path:"Grade08Marks",component:Grade08MarksComponent},
          {path:"Grade09",component:Grade09Component},
                {path:"Grade09Lessons",component:Grade09LessonsComponent},
                {path:"Grade09Papers",component:Grade09PapersComponent},
                {path:"Grade09Marks",component:Grade09MarksComponent},
          {path:"Grade10",component:Grade10Component},
                {path:"Grade10Lessons",component:Grade10LessonsComponent},
                {path:"Grade10Papers",component:Grade10PapersComponent},
                {path:"Grade10Marks",component:Grade10MarksComponent},
          {path:"Grade11",component:Grade11Component},
                {path:"Grade11Lessons",component:Grade11LessonsComponent},
                {path:"Grade11Papers",component:Grade11PapersComponent},
                {path:"Grade11Marks",component:Grade11MarksComponent},
          {path:"Grade12",component:Grade12Component},
                {path:"Grade12Lessons",component:Grade12LessonsComponent},
                {path:"Grade12Papers",component:Grade12PapersComponent},
                {path:"Grade12Marks",component:Grade12MarksComponent,data:{animation:'12MarksPage'},
                  children:[
                    {path:'Arts12',component:ArtMarksComponent,data:{animation:'ArtsPage'}},
                    {path:'Commerce12',component:CommerceMarksComponent,data:{animation:'CommercePage'}},
                    {path:'Tec12',component:TecMarksComponent,data:{animation:'TecPage'}},
                    {path:'Maths12',component:MathsMarksComponent,data:{animation:'MathsPage'}},
                    {path:'Bio12',component:BioMarksComponent,data:{animation:'BioPage'}}
                  ]},
          {path:"Grade13",component:Grade13Component},
                {path:"Grade13Lessons",component:Grade13LessonsComponent},
                {path:"Grade13Papers",component:Grade13PapersComponent},
                {path:"Grade13Marks",component:Grade13MarksComponent,
                children:[
                  {path:'Arts13',component:Art13MarksComponent,data:{animation:'ArtsPage'}},
                  {path:'Commerce13',component:Commerce13MarksComponent,data:{animation:'CommercePage'}},
                  {path:'Tec13',component:Tec13MarksComponent,data:{animation:'TecPage'}},
                  {path:'Maths13',component:Maths13MarksComponent,data:{animation:'MathsPage'}},
                  {path:'Bio13',component:Bio13MarksComponent,data:{animation:'BioPage'}}
                ]},

      {path:'NewsAndEvents',component:NewsAndEventsComponent,data:{animation:'NewsPage'}},
      {path:'About',component:AboutComponent,data:{animation:'AboutPage'}},
      {path:'logout',component:SignOutComponent,data:{animation:'LogoutPage'}}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
