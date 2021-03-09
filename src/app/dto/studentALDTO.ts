export default class studentALDTO {
  get studentName(): string {
    return this._studentName;
  }

  set studentName(value: string) {
    this._studentName = value;
  }

  get subCom_Maths(): number {
    return this._subCom_Maths;
  }

  set subCom_Maths(value: number) {
    this._subCom_Maths = value;
  }

  get subPhysics(): number {
    return this._subPhysics;
  }

  set subPhysics(value: number) {
    this._subPhysics = value;
  }

  get subChemistry(): number {
    return this._subChemistry;
  }

  set subChemistry(value: number) {
    this._subChemistry = value;
  }

  get subICT(): number {
    return this._subICT;
  }

  set subICT(value: number) {
    this._subICT = value;
  }

  get subBio(): number {
    return this._subBio;
  }

  set subBio(value: number) {
    this._subBio = value;
  }

  get subET(): number {
    return this._subET;
  }

  set subET(value: number) {
    this._subET = value;
  }

  get subSFT(): number {
    return this._subSFT;
  }

  set subSFT(value: number) {
    this._subSFT = value;
  }

  get subAgry(): number {
    return this._subAgry;
  }

  set subAgry(value: number) {
    this._subAgry = value;
  }

  get subBST(): number {
    return this._subBST;
  }

  set subBST(value: number) {
    this._subBST = value;
  }

  get subAccounting(): number {
    return this._subAccounting;
  }

  set subAccounting(value: number) {
    this._subAccounting = value;
  }

  get subBS(): number {
    return this._subBS;
  }

  set subBS(value: number) {
    this._subBS = value;
  }

  get subEconomics(): number {
    return this._subEconomics;
  }

  set subEconomics(value: number) {
    this._subEconomics = value;
  }

  get subSinhala(): number {
    return this._subSinhala;
  }

  set subSinhala(value: number) {
    this._subSinhala = value;
  }

  get subLogic(): number {
    return this._subLogic;
  }

  set subLogic(value: number) {
    this._subLogic = value;
  }

  get subGeography(): number {
    return this._subGeography;
  }

  set subGeography(value: number) {
    this._subGeography = value;
  }

  get subPolitics(): number {
    return this._subPolitics;
  }

  set subPolitics(value: number) {
    this._subPolitics = value;
  }

  get subBC(): number {
    return this._subBC;
  }

  set subBC(value: number) {
    this._subBC = value;
  }

  get subLanguages(): number {
    return this._subLanguages;
  }

  set subLanguages(value: number) {
    this._subLanguages = value;
  }

  get subHistory(): number {
    return this._subHistory;
  }

  set subHistory(value: number) {
    this._subHistory = value;
  }

  get subAesthetic(): number {
    return this._subAesthetic;
  }

  set subAesthetic(value: number) {
    this._subAesthetic = value;
  }

  get subEnglish(): number {
    return this._subEnglish;
  }

  set subEnglish(value: number) {
    this._subEnglish = value;
  }

  get subGIT(): number {
    return this._subGIT;
  }

  set subGIT(value: number) {
    this._subGIT = value;
  }
  get subBusinessStac(): number {
    return this._subBusinessStac;
  }

  set subBusinessStac(value: number) {
    this._subBusinessStac = value;
  }
  get total(): number {
    return this._total=this._subCom_Maths+ this._subPhysics+ this._subChemistry+ this._subICT+ this._subBio+ this._subET+ this._subSFT+ this._subAgry+ this._subBST+ this._subAccounting+ this._subBS+ this._subEconomics+ this._subSinhala+ this._subLogic+ this._subGeography+ this._subPolitics+ this._subBC+ this._subLanguages+ this._subHistory+ this._subAesthetic+ this._subEnglish+ this._subGIT;
  }

  set total(value: number) {
    this._total = value;
  }
  constructor(studentName: string, subCom_Maths: number, subPhysics: number, subChemistry: number, subICT: number, subBio: number, subET: number, subSFT: number, subAgry: number, subBST: number, subAccounting: number, subBS: number, subEconomics: number, subSinhala: number, subLogic: number, subGeography: number, subPolitics: number, subBC: number, subLanguages: number, subHistory: number, subAesthetic: number, subEnglish: number, subGIT: number,subBusinessStac: number) {
    this._studentName = studentName;
    this._subCom_Maths = subCom_Maths;
    this._subPhysics = subPhysics;
    this._subChemistry = subChemistry;
    this._subICT = subICT;
    this._subBio = subBio;
    this._subET = subET;
    this._subSFT = subSFT;
    this._subAgry = subAgry;
    this._subBST = subBST;
    this._subAccounting = subAccounting;
    this._subBS = subBS;
    this._subEconomics = subEconomics;
    this._subSinhala = subSinhala;
    this._subLogic = subLogic;
    this._subGeography = subGeography;
    this._subPolitics = subPolitics;
    this._subBC = subBC;
    this._subLanguages = subLanguages;
    this._subHistory = subHistory;
    this._subAesthetic = subAesthetic;
    this._subEnglish = subEnglish;
    this._subGIT = subGIT;
    this._subBusinessStac = subBusinessStac;
  }
  private _studentName:string;
  private _subCom_Maths:number;
  private _subPhysics:number;
  private _subChemistry:number;
  private _subICT:number;
  private _subBio:number;

  private _subET:number;
  private _subSFT:number;

  private _subAgry:number;
  private _subBST:number;

  private _subAccounting:number;

  private _subBS:number;

  private _subEconomics:number;

  private _subSinhala:number;

  private _subLogic:number;

  private _subGeography:number;

  private _subPolitics:number;

  private _subBC:number;

  private _subLanguages:number;

  private _subHistory:number;

  private _subAesthetic:number;

  private _subEnglish:number;

  private _subGIT:number;
  private _total:number;
  private _subBusinessStac: number;
}
