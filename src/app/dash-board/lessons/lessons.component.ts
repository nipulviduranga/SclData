import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../service/students.service';
import PapersLessonsDTO from '../../dto/Papers&LessonsDTO';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  dataArray=[];
  Topic='';
  Link = '';
  id='';
  isHidden = this.service.varifyAdmin();
  GreadAndData='';
  grade06Array=[];
  grade07Array=[];
  grade08Array=[];
  grade09Array=[];
  grade10Array=[];
  grade11Array=[];
  grade12Array=[];
  grade13Array=[];
  j=0;
  k=0;
  l=0;
  m=0;
  n=0;
  x=0;
  y=0;
  z=0;



  constructor(private service: StudentsService) { }

  ngOnInit(): void {
    this.loadData();


  }
  arraysNull(){
    this.grade06Array=[];
    this.grade07Array=[];
    this.grade08Array=[];
    this.grade09Array=[];
    this.grade10Array=[];
    this.grade11Array=[];
    this.grade12Array=[];
    this.grade13Array=[];
  }
  devideArrays(){
    for (let i=0;i<this.dataArray.length;i++){
      if(this.dataArray[i].Other==='Grade06Lessons'){
        this.grade06Array[this.j]=this.dataArray[i];
        this.j=this.j+1;
      }else if(this.dataArray[i].Other==='Grade07Lessons'){
        this.grade07Array[this.k]=this.dataArray[i];
        this.k=this.k+1;
      }else if(this.dataArray[i].Other==='Grade08Lessons'){
        this.grade08Array[this.l]=this.dataArray[i];
        this.l=this.l+1;
      }else if(this.dataArray[i].Other==='Grade09Lessons'){
        this.grade09Array[this.m]=this.dataArray[i];
        this.m=this.m+1;
      }else if(this.dataArray[i].Other==='Grade10Lessons'){
        this.grade10Array[this.n]=this.dataArray[i];
        this.n=this.n+1;
      }else if(this.dataArray[i].Other==='Grade11Lessons'){
        this.grade11Array[this.x]=this.dataArray[i];
        this.x=this.x+1;
      }else if(this.dataArray[i].Other==='Grade12Lessons'){
        this.grade12Array[this.y]=this.dataArray[i];
        this.y=this.y+1;
      }else if(this.dataArray[i].Other==='Grade13Lessons'){
        this.grade13Array[this.z]=this.dataArray[i];
        this.z=this.z+1;
      }
    }
  }

  loadData(){
    this.service.getData().subscribe(result=>{
      this.dataArray = result.dataSet;
      this.devideArrays();
    },err=>{
      console.log(err);
    });
  }
  saveData(){

    const dto = new PapersLessonsDTO(
      this.Topic,
      this.Link,
      this.GreadAndData

    );

    this.service.saveData(dto).subscribe(result=>
    {
      if(result.isSaved){
        alert('Saved');
        location.reload();
      }else {
        alert('Something Went Wrong');
      }
    },error => {
      alert('Error occured!');
      console.log(error);
    });
  }

  deleteData(id:string){
    if(confirm("Are you Sure?")){
      this.service.deleteData(id).subscribe(resp=>{
        alert('Deleted!');
        location.reload();
      },err=>{
        console.log(err);
      });
    }
  }

  openModel(grade: string) {

    this.GreadAndData=grade;
    document.getElementById('AddPapersAndLessons').click();

  }

}
