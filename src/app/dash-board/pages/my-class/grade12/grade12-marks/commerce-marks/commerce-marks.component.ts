import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from '../../../../../../service/students.service';
import studentDTO from '../../../../../../dto/studentALDTO';

@Component({
  selector: 'app-commerce-marks',
  templateUrl: './commerce-marks.component.html',
  styleUrls: ['./commerce-marks.component.scss']
})
export class CommerceMarksComponent implements OnInit {
  @ViewChild('first', {read: ElementRef}) firstName: ElementRef<HTMLElement>;
  name = '';
  subCom_Maths = 0;
  subPhysics = 0;
  subChemistry = 0;
  subICT = 0;
  subBio = 0;
  subET = 0;
  subSFT = 0;
  subBST = 0;
  subAccounting = 0;
  subBusinessStac = 0;
  subBS = 0;
  subSinhala = 0;
  subEnglish = 0;
  subBC = 0;
  subHistory = 0;
  subLogic = 0;
  subPolitics = 0;
  subEconomics = 0;
  subGeography = 0;
  subAesthetic = 0;
  subAgry = 0;
  subGIT = 0;
  subLanguages = 0;
  StudentArray: any[] = [];
  Place = '';
  total = 0;
  nameForUpdate = '';
  idForUpdate = '';
  subAccountingForUpdate = 0;
  subBSForUpdate = 0;
  subLogicForUpdate = 0;
  subBusinessStacForUpdate = 0;
  subEnglishForUpdate = 0;
  subICTForUpdate = 0;
  subEconomicsForUpdate = 0;
  subPoliticsForUpdate = 0;
  subGITForUpdate = 0;
  term = 'Grade12ComTerm1';
  isHidden = this.studentsService.varifyAdmin();

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
    if ( this.name!=='' &&this.subCom_Maths < 101 && this.subPhysics < 101 && this.subChemistry < 101 && this.subICT < 101 && this.subBio < 101 && this.subET < 101 && this.subSFT < 101 && this.subAgry<101 && this.subBST<101&& this.subAccounting<101&& this.subBS<101&& this.subBST<101&& this.subEconomics<101&& this.subSinhala<101 && this.subLogic<101&& this.subGeography<101&& this.subPolitics<101&& this.subBC<101&& this.subLanguages<101&& this.subHistory<101&& this.subAesthetic<101 && this.subEnglish<101&& this.subGIT<101 && this.subBusinessStac<101) {
      const dto = new studentDTO(
        this.name.trim(),
        Number(this.subCom_Maths),
        Number(this.subPhysics),
        Number(this.subChemistry),
        Number(this.subICT),
        Number(this.subBio),
        Number(this.subET),
        Number(this.subSFT),
        Number(this.subAgry),
        Number(this.subBST),
        Number(this.subAccounting),
        Number(this.subBS),
        Number(this.subEconomics),
        Number(this.subSinhala),
        Number(this.subLogic),
        Number(this.subGeography),
        Number(this.subPolitics),
        Number(this.subBC),
        Number(this.subLanguages),
        Number(this.subHistory),
        Number(this.subAesthetic),
        Number(this.subEnglish),
        Number(this.subGIT),
        Number(this.subBusinessStac)
      );

      this.studentsService.saveStudentAL(dto, term).subscribe(resp => {
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
    this.subBSForUpdate = student.SubBS;
    this.subAccountingForUpdate = student.SubAccounting;
    this.subLogicForUpdate = student.SubLogic;
    this.subEnglishForUpdate = student.SubEnglish;
    this.subICTForUpdate = student.SubICT;
    this.subEconomicsForUpdate = student.SubEconomics;
    this.subPoliticsForUpdate = student.SubPolitics;
    this.subGITForUpdate = student.SubGIT;
    this.subBusinessStacForUpdate = student.SubBusinessStac;
    this.subBS = student.SubBS;
  }
  updateStudent(term: string){

    const dto = new studentDTO(
      this.nameForUpdate.trim(),
      Number(this.subCom_Maths),
      Number(this.subPhysics),
      Number(this.subChemistry),
      Number(this.subICTForUpdate),
      Number(this.subBio),
      Number(this.subET),
      Number(this.subSFT),
      Number(this.subAgry),
      Number(this.subBST),
      Number(this.subAccountingForUpdate),
      Number(this.subBSForUpdate),
      Number(this.subEconomicsForUpdate),
      Number(this.subSinhala),
      Number(this.subLogicForUpdate),
      Number(this.subGeography),
      Number(this.subPoliticsForUpdate),
      Number(this.subBC),
      Number(this.subLanguages),
      Number(this.subHistory),
      Number(this.subAesthetic),
      Number(this.subEnglishForUpdate),
      Number(this.subGITForUpdate),
      Number(this.subBusinessStacForUpdate)
    );
    this.studentsService.updateStudentAL(dto , this.idForUpdate, term).subscribe(result => {
      alert('Updated');
    }, error => {
      console.log(error);
    });

  }

  getTerm(value: string) {
    if (value === '1st'){
      this.term = 'Grade12ComTerm1';
      this.loadData('Grade12ComTerm1');

    }else if (value === '2nd'){
      this.term = 'Grade12ComTerm2';
      this.loadData('Grade12ComTerm2');

    }else if (value === '3rd'){
      this.term = 'Grade12ComTerm3';
      this.loadData('Grade12ComTerm3');

    }

  }
}
