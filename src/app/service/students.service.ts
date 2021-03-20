import { Injectable } from '@angular/core';
import studentDTO from '../dto/studentDTO';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {environment} from '../../environments/environment';
import student10to11DTO from '../dto/student10to11DTO';
import studentALDTO from '../dto/studentALDTO';
import NewsEventsDTO from '../dto/News&EventsDTO';
import {publicDecrypt} from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

baseurl = environment.baseUrl1;

username='';
password = '';
UserAdmin=environment.UserAdmin;
PasswordAdmin=environment.UserPassword;

public getUserName(){
  return this.username;
}
public varifyAdmin(){
  if (this.username === this.UserAdmin && this.password === this.PasswordAdmin){
    return true;

  }else {
    return  false;
  }
}
  constructor(private http: HttpClient) { }
/////////////////////////////////News And Event///////////////////////////////////////////////////////////////
  public saveNews(dto:NewsEventsDTO):Observable<any> {
    console.log(dto);
    return this.http.post(this.baseurl + 'saveNews', {
      title: dto.Title,
      date: dto.Date,
      imgUrl: dto.ImgUrl,
      content: dto.Content
    });
  }
  public getNews():Observable<any>{
    return this.http.get(this.baseurl+'getNews',
      {
        observe: 'body',
          responseType: 'json'
    });
    }
  public updateNews(dto: NewsEventsDTO,id:string):Observable<any>{
  console.log(dto);
  return this.http.put(this.baseurl+'updateNews',{
    title: dto.Title,
    date: dto.Date,
    imgUrl: dto.ImgUrl,
    content: dto.Content,
    id:id
  });
  }
  public deleteNews(id:string):Observable<any>{
  return this.http.delete(this.baseurl+'deleteNews',
    {
    headers:{id}
    });
  }
////////////////////////////////////Login////////////////////////////////////////////////////////////////////////

  public registerUser(email:string,password:string): Observable<any>{
    return this.http.post(this.baseurl+'registerUser', {
     email,password
    });
  }
  public loginUser(email:string,password:string): Observable<any>{
  this.username=email;
  this.password=password;
    return this.http.get(this.baseurl+'loginUser', {
      headers:{email,password}
    });
  }
///////////////////////////////////////Student/////////////////////////////////////////////////////////////////////////
  public saveStudent(dto: studentDTO, term: string): Observable<any>{
    console.log(dto);
    return this.http.post(this.baseurl+'saveStudent'+term,
      {

        studentName : dto.studentName,
        subMaths : dto.subMaths,
        subSinhala : dto.subSinhala,
        subEnglish : dto.subEnglish,
        subHealth : dto.subHealth,
        subScience : dto.subScience,
        subBuddhism : dto.subBuddhism,
        subCitizen : dto.subCitizen,
        subGeography : dto.subGeography,
        subIt : dto.subIt,
        subPTS : dto.subPTS,
        subHistory : dto.subHistory,
        subTamil : dto.subTamil,
        subAesrhetics : dto.subAesrhetics,
        totals : dto.total
    });
  }
  public saveStudentOL(dto: student10to11DTO, term: string): Observable<any> {
    console.log(dto);
    return this.http.post(this.baseurl + 'saveStudent' + term,
      {

        studentName: dto.studentName,
        subMaths: dto.subMaths,
        subSinhala: dto.subSinhala,
        subEnglish: dto.subEnglish,
        subScience: dto.subScience,
        subBuddhism: dto.subBuddhism,
        subHistory: dto.subHistory,
        Group1: dto.Group1,
        Group2: dto.Group2,
        Group3: dto.Group3,
        totals: dto.total
      });
  }
  public saveStudentAL(dto: studentALDTO, term: string): Observable<any> {
    console.log(dto);
    return this.http.post(this.baseurl + 'saveStudent' + term,
      {
        studentName: dto.studentName,
        subCom_Maths:dto.subCom_Maths,
        subPhysics:dto.subPhysics,
        subChemistry:dto.subChemistry,
        subICT:dto.subICT,
        subBio:dto.subBio,
        subET:dto.subET,
        subSFT:dto.subSFT,
        subAgry:dto.subAgry,
        subBST:dto.subBST,
        subAccounting:dto.subAccounting,
        subBS:dto.subBS,
        subEconomics:dto.subEconomics,
        subSinhala:dto.subSinhala,
        subLogic:dto.subLogic,
        subGeography:dto.subGeography,
        subPolitics:dto.subPolitics,
        subBC:dto.subBC,
        subLanguages:dto.subLanguages,
        subHistory:dto.subHistory,
        subAesthetic:dto.subAesthetic,
        subEnglish:dto.subEnglish,
        subGIT:dto.subGIT,
        subBusinessStac: dto.subBusinessStac,
        totals: dto.total
      });
  }
  public getStudents(term:string): Observable <any>{
    console.log(term);
    return this.http.get(this.baseurl+'Marks'+term,
      {
      observe: 'body',
      responseType: 'json',
        headers: {term}
    });
  }

    public deleteStudent(id: string,term:string): Observable<any>{

      return this.http.delete(this.baseurl+'deleteStudent'+term,
        {headers :{id}}
      );

    }
    public updateStudent(dto: studentDTO , id: string,term:string): Observable<any>{
      return this.http.put(this.baseurl+'updateStudent'+term,
        {
          studentName : dto.studentName,
          subMaths : dto.subMaths,
          subSinhala : dto.subSinhala,
          subEnglish : dto.subEnglish,
          subHealth : dto.subHealth,
          subScience : dto.subScience,
          subBuddhism : dto.subBuddhism,
          subCitizen : dto.subCitizen,
          subGeography : dto.subGeography,
          subIt : dto.subIt,
          subPTS : dto.subPTS,
          subHistory : dto.subHistory,
          subTamil : dto.subTamil,
          subAesrhetics : dto.subAesrhetics,
          totals : dto.total,
          id:id,
        });
    }
  public updateStudentOL(dto: student10to11DTO , id: string,term:string): Observable<any>{
    return this.http.put(this.baseurl+'updateStudent'+term,
      {
        studentName: dto.studentName,
        subMaths: dto.subMaths,
        subSinhala: dto.subSinhala,
        subEnglish: dto.subEnglish,
        subScience: dto.subScience,
        subBuddhism: dto.subBuddhism,
        subHistory: dto.subHistory,
        Group1: dto.Group1,
        Group2: dto.Group2,
        Group3: dto.Group3,
        totals: dto.total,
        id:id
      });
  }
  public updateStudentAL(dto: studentALDTO , id: string,term:string): Observable<any>{
    return this.http.put(this.baseurl+'updateStudent'+term,
      {
        studentName: dto.studentName,
        subCom_Maths:dto.subCom_Maths,
        subPhysics:dto.subPhysics,
        subChemistry:dto.subChemistry,
        subICT:dto.subICT,
        subBio:dto.subBio,
        subET:dto.subET,
        subSFT:dto.subSFT,
        subAgry:dto.subAgry,
        subBST:dto.subBST,
        subAccounting:dto.subAccounting,
        subBS:dto.subBS,
        subEconomics:dto.subEconomics,
        subSinhala:dto.subSinhala,
        subLogic:dto.subLogic,
        subGeography :dto.subGeography,
        subPolitics:dto.subPolitics,
        subBC:dto.subBC,
        subLanguages:dto.subLanguages,
        subHistory:dto.subHistory,
        subAesthetic:dto.subAesthetic,
        subEnglish:dto.subEnglish,
        subGIT : dto.subGIT,
        subBusinessStac:dto.subBusinessStac,
        totals: dto.total,
        id:id
      });
  }
}
