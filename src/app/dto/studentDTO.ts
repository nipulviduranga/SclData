export default class studentDTO {
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

  get subHealth(): number {
    return this._subHealth;
  }

  set subHealth(value: number) {
    this._subHealth = value;
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

  get subCitizen(): number {
    return this._subCitizen;
  }

  set subCitizen(value: number) {
    this._subCitizen = value;
  }

  get subGeography(): number {
    return this._subGeography;
  }

  set subGeography(value: number) {
    this._subGeography = value;
  }

  get subIt(): number {
    return this._subIt;
  }

  set subIt(value: number) {
    this._subIt = value;
  }

  get subPTS(): number {
    return this._subPTS;
  }

  set subPTS(value: number) {
    this._subPTS = value;
  }

  get subHistory(): number {
    return this._subHistory;
  }

  set subHistory(value: number) {
    this._subHistory = value;
  }

  get subTamil(): number {
    return this._subTamil;
  }

  set subTamil(value: number) {
    this._subTamil = value;
  }

  get subAesrhetics(): number {
    return this._subAesrhetics;
  }

  set subAesrhetics(value: number) {
    this._total = value;
  }
  get total(): number {
    this._total = this._subTamil+this._subHistory+this._subPTS+this._subIt+this._subGeography+this._subCitizen+this._subBuddhism+this._subScience+this._subHealth+this._subEnglish+this._subSinhala+this._subMaths+this._subAesrhetics;
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }
  constructor(studentName: string, subMaths: number, subSinhala: number, subEnglish: number, subHealth: number, subScience: number, subBuddhism: number, subCitizen: number, subGeography: number, subIt: number, subPTS: number, subHistory: number, subTamil: number, subAesrhetics: number) {
    this._studentName = studentName;
    this._subMaths = subMaths;
    this._subSinhala = subSinhala;
    this._subEnglish = subEnglish;
    this._subHealth = subHealth;
    this._subScience = subScience;
    this._subBuddhism = subBuddhism;
    this._subCitizen = subCitizen;
    this._subGeography = subGeography;
    this._subIt = subIt;
    this._subPTS = subPTS;
    this._subHistory = subHistory;
    this._subTamil = subTamil;
    this._subAesrhetics = subAesrhetics;

  }


  private _studentName: string;
  private _subMaths: number;
  private _subSinhala: number;
  private _subEnglish: number;
  private _subHealth: number;
  private _subScience: number;
  private _subBuddhism: number;
  private _subCitizen: number;
  private _subGeography: number;
  private _subIt: number;
  private _subPTS: number;
  private _subHistory: number;
  private _subTamil: number;
  private _subAesrhetics: number;
  private _total: number;

}
