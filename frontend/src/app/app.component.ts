import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  platform: string;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  public ngOnInit(): void {
    this.platform = isPlatformBrowser(this.platformId) ? 'Browser' : 'Server';
  }
}
