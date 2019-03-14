import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SynergyAngularStyleGuide';
  

  webColumns = {
    totalColumns: 12,
    height: '100px',
    columnPadding:  '40px',
    leftColumn: { cols: 8, color: 'lightblue'},
    rightColumn: { cols: 4, color: 'lightgreen'}
  };

  tabletColumns = {
    totalColumns: 12,
    height: '100px',
    columnPadding:  '10px',
    leftColumn: { cols: 6, color: 'lightblue'},
    rightColumn: { cols: 6, color: 'lightgreen'}
  };

  columns = this.webColumns

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.columns = this.webColumns;

      }
    });

    breakpointObserver.observe([
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        this.columns = this.tabletColumns;
      }
    });
  }


}
