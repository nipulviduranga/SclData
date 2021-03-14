export default class NewsEventsDTO {
  get Title(): string {
    return this._Title;
  }

  set Title(value: string) {
    this._Title = value;
  }

  get ImgUrl(): string {
    return this._ImgUrl;
  }

  set ImgUrl(value: string) {
    this._ImgUrl = value;
  }

  get Date(): string {
    return this._Date;
  }

  set Date(value: string) {
    this._Date = value;
  }

  get Content(): string {
    return this._Content;
  }

  set Content(value: string) {
    this._Content = value;
  }

  constructor(Title: string, ImgUrl: string, Date: string, Content: string) {
    this._Title = Title;
    this._ImgUrl = ImgUrl;
    this._Date = Date;
    this._Content = Content;
  }

  private _Title:string;
  private _ImgUrl:string;
  private _Date:string;
  private _Content:string;
}
