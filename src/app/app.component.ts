import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  isShow: boolean = false;
  isShowPortrait: boolean = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Web,
      Breakpoints.TabletLandscape
    ]).subscribe(result => {
      this.isShow = false;
      if (result.matches) {
        this.isShow = true;
      }
    });
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isShowPortrait = false;
      if (result.matches) {
        this.isShowPortrait = true;
      }
    });
  }
}
