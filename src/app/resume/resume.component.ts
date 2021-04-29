import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  onClick(selector:any) {
    let x = document.querySelector(selector);
    if (x) {
      x.scrollIntoView();
    }
  }
}
