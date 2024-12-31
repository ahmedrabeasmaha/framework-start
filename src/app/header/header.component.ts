import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  InjectionToken,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  padding!: boolean;
  scrollTop!: number;

  constructor(
    @Inject(PLATFORM_ID) private _platformId: InjectionToken<Object>
  ) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      this._updateScrollState();
    }
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this._updateScrollState();
  }
  private _updateScrollState(): void {
    this.scrollTop = window?.scrollY;
    if (this.scrollTop) {
      this.padding = false;
    } else {
      this.padding = true;
    }
  }
}
