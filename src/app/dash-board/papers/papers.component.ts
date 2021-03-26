import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../service/students.service';
import PapersLessonsDTO from '../../dto/Papers&LessonsDTO';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent implements OnInit {

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
  devideArrays(){
    for (let i=0;i<this.dataArray.length;i++){
      if(this.dataArray[i].Other==='Grade06Papers'){
        this.grade06Array[this.j]=this.dataArray[i];
        this.j=this.j+1;
      }else if(this.dataArray[i].Other==='Grade07Papers'){
        this.grade07Array[this.k]=this.dataArray[i];
        this.k=this.k+1;
      }else if(this.dataArray[i].Other==='Grade08Papers'){
        this.grade08Array[this.l]=this.dataArray[i];
        this.l=this.l+1;
      }else if(this.dataArray[i].Other==='Grade09Papers'){
        this.grade09Array[this.m]=this.dataArray[i];
        this.m=this.m+1;
      }else if(this.dataArray[i].Other==='Grade10Papers'){
        this.grade10Array[this.n]=this.dataArray[i];
        this.n=this.n+1;
      }else if(this.dataArray[i].Other==='Grade11Papers'){
        this.grade11Array[this.x]=this.dataArray[i];
        this.x=this.x+1;
      }else if(this.dataArray[i].Other==='Grade12Papers'){
        this.grade12Array[this.y]=this.dataArray[i];
        this.y=this.y+1;
      }else if(this.dataArray[i].Other==='Grade13Papers'){
        this.grade13Array[this.z]=this.dataArray[i];
        this.z=this.z+1;
      }
    }
  }

  loadData(){
    this.service.getData().subscribe(result=>{
      this.dataArray = result.dataSet;
      this.devideArrays();
      console.log('06dataArray:',this.grade06Array);
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
