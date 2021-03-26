export default class PapersLessonsDTO {
  get Topic(): string {
    return this._Topic;
  }

  set Topic(value: string) {
    this._Topic = value;
  }

  get Link(): string {
    return this._Link;
  }

  set Link(value: string) {
    this._Link = value;
  }

  get GradeAndData(): string {
    return this._GradeAndData;
  }

  set GradeAndData(value: string) {
    this._GradeAndData = value;
  }

  constructor(Topic: string, Link: string, GradeAndData: string) {
    this._Topic = Topic;
    this._Link = Link;
    this._GradeAndData = GradeAndData;
  }

  private _Topic: string;
  private _Link: string;
  private _GradeAndData: string;
}
