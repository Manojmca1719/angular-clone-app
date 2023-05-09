import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-clone-app';
  public currentUrl:string = ""
  constructor(private router: Router,private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = this.router.url;
          console.log(this.router.url);
        }
      }
    );
  }
}
