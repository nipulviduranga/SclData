import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from '../../../../../service/students.service';
import studentDTO from '../../../../../dto/studentDTO';

@Component({
  selector: 'app-grade08-marks',
  templateUrl: './grade08-marks.component.html',
  styleUrls: ['./grade08-marks.component.scss']
})
export class Grade08MarksComponent implements OnInit {
  @ViewChild('first', {read: ElementRef}) firstName: ElementRef<HTMLElement>;
  name = '';
  subMaths = 0;
  subSinhala = 0;
  subEnglish = 0;
  subHealth = 0;
  subScience = 0;
  subBuddhism = 0;
  subCitizen = 0;
  subGeography = 0;
  subIt = 0;
  subPTS = 0;
  subHistory = 0;
  subTamil = 0;
  subAesrhetics = 0;
  StudentArray: any[] = [];
  Place = '';
  total = 0;
  nameForUpdate = '';
  idForUpdate = '';
  subTamilForUpdate = 0;
  subSinhalaForUpdate = 0;
  subScienceForUpdate = 0;
  subMathsForUpdate = 0;
  subBuddhismForUpdate = 0;
  subEnglishForUpdate = 0;
  subHealthForUpdate = 0;
  subGeographyForUpdate = 0;
  subCitizenForUpdate = 0;
  subItForUpdate = 0;
  subPTSForUpdate = 0;
  subAesrheticsForUpdate = 0;
  subHistoryForUpdate = 0;

  term = 'Grade07Term1';

  constructor(private studentsService: StudentsService) { }
  // dropdown data
  Terms = [
    {value: '1st', viewValue: '1st Term'},
    {value: '2nd', viewValue: '2nd Term'},
    {value: '3rd', viewValue: '3rd Term'}
  ];

  ngOnInit(): void {

  }

  loadData(term: string){
    this.studentsService.getStudents(term).subscribe(data => {
      this.StudentArray = data.dataSet;
      // sort data String
      for (let i = 0; i < this.StudentArray.length; i++)
      {
        for (let j = i + 1; j < this.StudentArray.length; j++) {
          if (this.StudentArray[i]?.Total < this.StudentArray[j]?.Total)
          {
            const temp = this.StudentArray[i];
            this.StudentArray[i] = this.StudentArray[j];
            this.StudentArray[j] = temp;
          }
        }
      }
      // include place
      for (let i = 0; i < this.StudentArray.length; i++){
        this.StudentArray[i].other = i + 1;
      }

    }, error => {
      console.log(error);
    });
  }
  searchStudent() {
    if (this.name !== '') {
      const filteredArray = this.StudentArray.filter(d => {
        const data = 'StudentName' ? d.StudentName : d; // Incase If It's Array Of Objects.
        const dataWords = typeof data == 'string' && data?.split(' ')?.map(b => b && b.toLowerCase().trim()).filter(b => b);
        const searchWords = typeof this.name == 'string' && this.name?.split(' ').map(b => b && b.toLowerCase().trim()).filter(b => b);

        const matchingWords = searchWords.filter(word => dataWords.includes(word));

        return matchingWords.length;

      }, error => {
        console.log(error);
      });
      this.StudentArray = filteredArray;
    }else {
      alert('Please Input Name!');
    }


  }

  saveStudent(term: string) {
    if ( this.name!=='' &&this.subMaths < 101 && this.subSinhala < 101 && this.subEnglish < 101 && this.subHealth < 101 && this.subScience < 101 && this.subBuddhism < 101 && this.subCitizen < 101 && this.subGeography < 101 && this.subIt < 101 && this.subPTS < 101 && this.subHistory < 101 && this.subTamil < 101 && this.subAesrhetics) {
      const dto = new studentDTO(
        this.name.trim(),
        Number(this.subMaths),
        Number(this.subSinhala),
        Number(this.subEnglish),
        Number(this.subHealth),
        Number(this.subScience),
        Number(this.subBuddhism),
        Number(this.subCitizen),
        Number(this.subGeography),
        Number(this.subIt),
        Number(this.subPTS),
        Number(this.subHistory),
        Number(this.subTamil),
        Number(this.subAesrhetics)
      );

      this.studentsService.saveStudent(dto, term).subscribe(resp => {
        if (resp.isSaved) {
          alert('Saved');
        } else {
          alert('something Went Wrong!');
        }
      });
    } else {
      alert('Please Input Valid Data!');
    }
  }



  deleteCustomer(_id: string, term: string){
    if (confirm('Are You Sure!')){
      this.studentsService.deleteStudent(_id, term).subscribe(resp => {
        alert('deleted!');
      }, error => {
        console.log(error);
      });
    }
  }

  openModel(student: any, id: string) {
    this.idForUpdate = id;

    document.getElementById('openModel').click();
    this.nameForUpdate = student.StudentName;
    this.subTamilForUpdate = student.SubTamil;
    this.subSinhalaForUpdate = student.SubSinhala;
    this.subScienceForUpdate = student.SubScience;
    this.subMathsForUpdate = student.SubMaths;
    this.subBuddhismForUpdate = student.SubBuddhism;
    this.subEnglishForUpdate = student.SubEnglish;
    this.subHealthForUpdate = student.SubHealth;
    this.subGeographyForUpdate = student.SubGeography;
    this.subCitizenForUpdate = student.SubCitizen;
    this.subItForUpdate = student.SubIt;
    this.subPTSForUpdate = student.SubPTS;
    this.subAesrheticsForUpdate = student.SubAesrhetics;
    this.subHistoryForUpdate = student.SubHistory;
  }

  updateStudent(term: string){

    const dto = new studentDTO(
      this.nameForUpdate.trim(),
      Number(this.subMathsForUpdate),
      Number(this.subSinhalaForUpdate),
      Number(this.subEnglishForUpdate),
      Number(this.subHealthForUpdate),
      Number(this.subScienceForUpdate),
      Number(this.subBuddhismForUpdate),
      Number(this.subCitizenForUpdate),
      Number(this.subGeographyForUpdate),
      Number(this.subItForUpdate),
      Number(this.subPTSForUpdate),
      Number(this.subHistoryForUpdate),
      Number(this.subTamilForUpdate),
      Number(this.subAesrheticsForUpdate)
    );
    this.studentsService.updateStudent(dto , this.idForUpdate, term).subscribe(result => {
      alert('Updated');
    }, error => {
      console.log(error);
    });

  }

  getTerm(value: string) {
    if (value === '1st'){
      this.term = 'Grade08Term1';
      this.loadData('Grade08Term1');

    }else if (value === '2nd'){
      this.term = 'Grade08Term2';
      this.loadData('Grade08Term2');

    }else if (value === '3rd'){
      this.term = 'Grade08Term3';
      this.loadData('Grade08Term3');

    }

  }
}
