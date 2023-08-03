import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../../service/students.service';
import NewsEventsDTO from '../../../dto/News&EventsDTO';

@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.scss']
})
export class NewsAndEventsComponent implements OnInit {
  newsArray=[];
  Title='';
  Date = '';
  Content = '';
  ImgUrl = 'https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cda12b505afa1beb06e49d89014cbd65&auto=format&fit=crop&w=634&q=80';
  TitleForUpdate= '';
  DateForUpdate = (new Date()).toLocaleString();
  ContentForUpdate = '';
  ImgUrlForUpdate = '';
  ReadMe= '';
  id='';
  isHidden = this.service.varifyAdmin();
  constructor(private service:StudentsService) { }

  ngOnInit(): void {
    const today= new Date();
    this.Date=today.toLocaleString();
    console.log(today.toLocaleString());
    this.loadData();
    /*this.loadImage();*/
  }

/*  loadImage(){
   const imge =document.getElementById('newsImg') as HTMLImageElement;
    imge.src= 'https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cda12b505afa1beb06e49d89014cbd65&auto=format&fit=crop&w=634&q=80';
  }*/
loadData(){
    this.service.getNews().subscribe(result=>{
      this.newsArray=result.dataSet;

    },err=>{
      console.log(err);
    });
}
saveNews(){
    const dto = new NewsEventsDTO(
      this.Title,
      this.ImgUrl,
      this.Date,
      this.Content
    );

    this.service.saveNews(dto).subscribe(result=>
    {
      if(result.isSaved){
        alert('Saved');
        this.loadData();
      }else {
        alert('Something Went Wrong');
      }
    },error => {
      alert('Fill Reqired Fields!');
    });
}
 deleteNews(id:string){
    if(confirm("Are you Sure?")){
      this.service.deleteNews(id).subscribe(resp=>{
        alert('Deleted!');
        this.loadData();
      },err=>{
        console.log(err);
      });
    }
}

  openModel(news: any) {
    console.log(news.ImgUrl);
  document.getElementById('Update').click();
  this.TitleForUpdate=news.Title;
  this.ImgUrlForUpdate=news.ImgUrl;
  this.ContentForUpdate=news.Content;
  this.id=news._id;
  }

  updateNews() {
    const dto = new NewsEventsDTO(
      this.TitleForUpdate,
      this.ImgUrlForUpdate,
      this.DateForUpdate,
      this.ContentForUpdate
    );
  this.service.updateNews(dto,this.id).subscribe(resp=>{
    alert('Updated!');
    this.loadData();
  },error => {
    console.log(error);
    alert('Something Went Wrong!');
  });
  }

  openModelRead(news: any) {
    document.getElementById('readMe').click();
    this.ReadMe=news.Content;
  }
}
