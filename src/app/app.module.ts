import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './dash-board/pages/home/home.component';
import { NewsAndEventsComponent } from './dash-board/pages/news-and-events/news-and-events.component';
import { TimeTablesComponent } from './dash-board/pages/time-tables/time-tables.component';

import { DefaultPageComponent } from './dash-board/pages/default-page/default-page.component';
import { CardsComponent } from './dash-board/pages/default-page/items/cards/cards.component';
import { AboutComponent } from './dash-board/pages/about/about.component';
import { SignOutComponent } from './dash-board/pages/sign-out/sign-out.component';

import { MyClassComponent } from './dash-board/pages/my-class/my-class.component';
import { Grade06PapersComponent } from './dash-board/pages/my-class/grade06/grade06-papers/grade06-papers.component';
import { Grade06LessonsComponent } from './dash-board/pages/my-class/grade06/grade06-lessons/grade06-lessons.component';
import { Grade06MarksComponent } from './dash-board/pages/my-class/grade06/grade06-marks/grade06-marks.component';
import { Grade07PapersComponent } from './dash-board/pages/my-class/grade07/grade07-papers/grade07-papers.component';
import { Grade07LessonsComponent } from './dash-board/pages/my-class/grade07/grade07-lessons/grade07-lessons.component';
import { Grade07MarksComponent } from './dash-board/pages/my-class/grade07/grade07-marks/grade07-marks.component';
import { Grade08PapersComponent } from './dash-board/pages/my-class/grade08/grade08-papers/grade08-papers.component';
import { Grade08LessonsComponent } from './dash-board/pages/my-class/grade08/grade08-lessons/grade08-lessons.component';
import { Grade08MarksComponent } from './dash-board/pages/my-class/grade08/grade08-marks/grade08-marks.component';
import { Grade09PapersComponent } from './dash-board/pages/my-class/grade09/grade09-papers/grade09-papers.component';
import { Grade09LessonsComponent } from './dash-board/pages/my-class/grade09/grade09-lessons/grade09-lessons.component';
import { Grade09MarksComponent } from './dash-board/pages/my-class/grade09/grade09-marks/grade09-marks.component';
import { Grade10PapersComponent } from './dash-board/pages/my-class/grade10/grade10-papers/grade10-papers.component';
import { Grade10LessonsComponent } from './dash-board/pages/my-class/grade10/grade10-lessons/grade10-lessons.component';
import { Grade10MarksComponent } from './dash-board/pages/my-class/grade10/grade10-marks/grade10-marks.component';
import { Grade11PapersComponent } from './dash-board/pages/my-class/grade11/grade11-papers/grade11-papers.component';
import { Grade11LessonsComponent } from './dash-board/pages/my-class/grade11/grade11-lessons/grade11-lessons.component';
import { Grade11MarksComponent } from './dash-board/pages/my-class/grade11/grade11-marks/grade11-marks.component';
import { Grade12PapersComponent } from './dash-board/pages/my-class/grade12/grade12-papers/grade12-papers.component';
import { Grade12LessonsComponent } from './dash-board/pages/my-class/grade12/grade12-lessons/grade12-lessons.component';
import { Grade12MarksComponent } from './dash-board/pages/my-class/grade12/grade12-marks/grade12-marks.component';
import { Grade13PapersComponent } from './dash-board/pages/my-class/grade13/grade13-papers/grade13-papers.component';
import { Grade13LessonsComponent } from './dash-board/pages/my-class/grade13/grade13-lessons/grade13-lessons.component';
import { Grade13MarksComponent } from './dash-board/pages/my-class/grade13/grade13-marks/grade13-marks.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MarksEnvironmentComponent } from './dash-board/pages/my-class/marks-environment/marks-environment.component';
import {Environment} from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import { ArtMarksComponent } from './dash-board/pages/my-class/grade12/grade12-marks/art-marks/art-marks.component';
import { CommerceMarksComponent } from './dash-board/pages/my-class/grade12/grade12-marks/commerce-marks/commerce-marks.component';
import { TecMarksComponent } from './dash-board/pages/my-class/grade12/grade12-marks/tec-marks/tec-marks.component';
import { MathsMarksComponent } from './dash-board/pages/my-class/grade12/grade12-marks/maths-marks/maths-marks.component';
import { BioMarksComponent } from './dash-board/pages/my-class/grade12/grade12-marks/bio-marks/bio-marks.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashBoardComponent,
    HomeComponent,
    NewsAndEventsComponent,
    TimeTablesComponent,
    DefaultPageComponent,
    CardsComponent,
    AboutComponent,
    SignOutComponent,
    MyClassComponent,
    Grade06PapersComponent,
    Grade06LessonsComponent,
    Grade06MarksComponent,
    Grade07PapersComponent,
    Grade07LessonsComponent,
    Grade07MarksComponent,
    Grade08PapersComponent,
    Grade08LessonsComponent,
    Grade08MarksComponent,
    Grade09PapersComponent,
    Grade09LessonsComponent,
    Grade09MarksComponent,
    Grade10PapersComponent,
    Grade10LessonsComponent,
    Grade10MarksComponent,
    Grade11PapersComponent,
    Grade11LessonsComponent,
    Grade11MarksComponent,
    Grade12PapersComponent,
    Grade12LessonsComponent,
    Grade12MarksComponent,
    Grade13PapersComponent,
    Grade13LessonsComponent,
    Grade13MarksComponent,
    MarksEnvironmentComponent,
    ArtMarksComponent,
    CommerceMarksComponent,
    TecMarksComponent,
    MathsMarksComponent,
    BioMarksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
