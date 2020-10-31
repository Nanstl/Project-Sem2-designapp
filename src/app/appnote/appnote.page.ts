import { Component } from "@angular/core";

@Component({
  selector: "app-appnote",
  templateUrl: "appnote.page.html",
  styleUrls: ["appnote.page.scss"],
})
export class AppnotePage {
  notes = [];

  datestart;
  dateend;
  topic;
  detail;
  isUpdate;
  ind;
  myDate: String = new Date().toISOString();

  constructor() {}
  addNote() {
    this.notes = this.notes || [];
    this.notes.push({
      datestart: this.datestart,
      dateend: this.dateend,
      topic: this.topic,
      detail: this.detail,
    });
  }
  updateNote() {
    this.notes[this.ind].datestart = this.datestart;
    this.notes[this.ind].dateend = this.dateend;
    this.notes[this.ind].topic = this.topic;
    this.notes[this.ind].detail = this.detail;
  }
  delNote(detail: any) {
    let index = (this.ind = this.notes.findIndex(
      (obj) => obj.detail == detail
    ));
    console.log(index);
    this.notes.splice(index, 1);
  }
  checkIn(detail: any) {
    this.isUpdate = true;
    this.ind = this.notes.findIndex((obj) => obj.detail == detail);
    console.log(this.ind);
    this.datestart = this.notes[this.ind].datestart;
    this.dateend = this.notes[this.ind].dateend;
    this.topic = this.notes[this.ind].topic;
    this.detail = this.notes[this.ind].detail;
  }
  clearText() {}
  clearStorage() {}

  doRefresh(event) {
    console.log("Begin async operation");
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 500);
  }

  setStorage() {}
  getStorage() {}
}
