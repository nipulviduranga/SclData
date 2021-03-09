export default class student10to11DTO {
  get studentName(): string {
    return this._studentName;
  }

  set studentName(value: string) {
    this._studentName = value;
  }

  get subMaths(): number {
    return this._subMaths;
  }

  set subMaths(value: number) {
    this._subMaths = value;
  }

  get subSinhala(): number {
    return this._subSinhala;
  }

  set subSinhala(value: number) {
    this._subSinhala = value;
  }

  get subEnglish(): number {
    return this._subEnglish;
  }

  set subEnglish(value: number) {
    this._subEnglish = value;
  }

  get subScience(): number {
    return this._subScience;
  }

  set subScience(value: number) {
    this._subScience = value;
  }

  get subBuddhism(): number {
    return this._subBuddhism;
  }

  set subBuddhism(value: number) {
    this._subBuddhism = value;
  }

  get Group1(): number {
    return this._Group1;
  }

  set Group1(value: number) {
    this._Group1 = value;
  }

  get Group2(): number {
    return this._Group2;
  }

  set Group2(value: number) {
    this._Group2 = value;
  }

  get subHistory(): number {
    return this._subHistory;
  }

  set subHistory(value: number) {
    this._subHistory = value;
  }

  get Group3(): number {
    return this._Group3;
  }

  set Group3(value: number) {
    this._Group3 = value;
  }

  get total(): number {
    return this._total=this._Group1+this._Group2+this._Group3+this._subEnglish+this._subBuddhism+this._subHistory+this._subMaths+this._subScience+this._subSinhala;
  }

  set total(value) {
    this._total = value;
  }
  constructor(studentName: string, subMaths: number, subSinhala: number, subEnglish: number, subScience: number, subBuddhism: number, subHistory: number, Group1: number, Group2: number,  Group3: number) {
    this._studentName = studentName;
    this._subMaths = subMaths;
    this._subSinhala = subSinhala;
    this._subEnglish = subEnglish;
    this._subScience = subScience;
    this._subBuddhism = subBuddhism;
    this._Group1 = Group1;
    this._Group2 = Group2;
    this._subHistory = subHistory;
    this._Group3 = Group3;
  }
  private _studentName: string;
  private _subMaths: number;
  private _subSinhala: number;
  private _subEnglish: number;
  private _subScience: number;
  private _subBuddhism: number;
  private _Group1: number;
  private _Group2: number;
  private _subHistory: number;
  private _Group3: number;
  private _total: number;
}
