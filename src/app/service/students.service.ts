import { Injectable } from '@angular/core';
import studentDTO from '../dto/studentDTO';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  public saveStudent(dto: studentDTO, term: string): Observable<any>{
    console.log(dto);
    return this.http.post('http://localhost:3001/api/v1/studentRoute/saveStudent'+term,
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
  public getStudents(term:string): Observable <any>{
    console.log(term);
    return this.http.get('http://localhost:3001/api/v1/studentRoute/Marks'+term,
      {
      observe: 'body',
      responseType: 'json',
        headers: {term}
    });
  }

    public deleteStudent(id: string,term:string): Observable<any>{

      return this.http.delete('http://localhost:3001/api/v1/studentRoute/deleteStudent'+term,
        {headers :{id}}
      );

    }
    public updateStudent(dto: any , id: string,term:string): Observable<any>{
      return this.http.put('http://localhost:3001/api/v1/studentRoute/updateStudent'+term,
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
}
