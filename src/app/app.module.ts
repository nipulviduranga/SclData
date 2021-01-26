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
import { MarksComponent } from './dash-board/pages/marks/marks.component';
import { DefaultPageComponent } from './dash-board/pages/default-page/default-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashBoardComponent,
    HomeComponent,
    NewsAndEventsComponent,
    TimeTablesComponent,
    MarksComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
