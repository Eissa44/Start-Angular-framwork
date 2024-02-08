import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  imgsArr: string[] = [
    './assets/imgs/poert1.png',
    './assets/imgs/port2.png',
    './assets/imgs/port3.png',
    './assets/imgs/1.jpg',
    './assets/imgs/2.jpg',
    './assets/imgs/3.jpg',
  ];

  showDitels: boolean = false;
  imgClick() {
    this.showDitels = !this.showDitels;
    console.log(this.showDitels);
  }

  slected: string = '';
  slectedImg(imgsArr: string) {
    this.slected = imgsArr;
    console.log(this.slected);
  }
}
