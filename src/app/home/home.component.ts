
import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-home',
  template: ` <ng-lottie [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>`,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animationCreated(AnimationItem: AnimationItem): void {
    console.log(AnimationItem)
  }



}
