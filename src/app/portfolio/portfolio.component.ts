import {
  Component,
  ElementRef,
  ViewChild,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faPlus,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Image } from '../image';
@Component({
  selector: 'app-portfolio',
  imports: [FontAwesomeModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  faStar!: IconDefinition;
  faPlus!: IconDefinition;
  faChevronRight!: IconDefinition;
  faChevronLeft!: IconDefinition;
  currIdx!: number;
  showModal!: boolean;
  currentImg!: string;
  images: Image[] = [
    { id: 1, name: 'poert1', url: 'img/poert1.png' },
    { id: 2, name: 'port2', url: 'img/port2.png' },
    { id: 3, name: 'port3', url: 'img/port3.png' },
    { id: 4, name: 'poert4', url: 'img/poert1.png' },
    { id: 5, name: 'port5', url: 'img/port2.png' },
    { id: 6, name: 'port6', url: 'img/port3.png' },
  ];
  constructor() {
    this.showModal = true;
    this.faStar = faStar;
    this.faPlus = faPlus;
    this.faChevronRight = faChevronRight;
    this.faChevronLeft = faChevronLeft;
  }
  nextImg(event: MouseEvent) {
    event.stopPropagation();
    if (this.currIdx + 1 < 6) {
      this.currIdx++;
    } else {
      this.currIdx = 0;
    }
    this.currentImg = this.images[this.currIdx].url;
  }
  prevImg(event: MouseEvent) {
    if (this.currIdx - 1 > 0) {
      this.currIdx--;
    } else {
      this.currIdx = 5;
    }
    this.currentImg = this.images[this.currIdx].url;
  }

  showInModal(index: number) {
    this.currIdx = index;

    this.currentImg = this.images[this.currIdx].url;
    this.showModal = false;
  }
  hideModal() {
    this.showModal = true;
    this.currentImg = '';
  }
}
