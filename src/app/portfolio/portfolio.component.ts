import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick(selector: any) {
    let x = document.querySelector(selector);
    if (x) {
      x.scrollIntoView();
    }
  }
}
