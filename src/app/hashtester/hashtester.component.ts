import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-hashtester',
  templateUrl: './hashtester.component.html',
  styleUrls: ['./hashtester.component.css']
})
export class HashtesterComponent implements OnInit {
    arrow: string;
    smallerThanMd: boolean;
    hashAlgorithm: string;

  constructor() {
    this.arrow = '/assets/img/Sideways_Arrow_Icon.svg';
    this.smallerThanMd = window.innerWidth <= 767;
   }

  ngOnInit() {
    this.hashAlgorithm = 'sha1';
  }

  onResize(event) {
    this.smallerThanMd = event.target.innerWidth <= 767;
    console.log("Current window size is "+ event.target.innerWidth);
    console.log("smallerThanMdIs "+ this.smallerThanMd);
  }
}
