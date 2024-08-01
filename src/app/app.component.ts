import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Set the class based on the current route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const body = document.body;
        if (event.url === '/') {
          body.classList.remove('faded-background');
          body.classList.add('home-background');
        } else {
          body.classList.remove('home-background');
          body.classList.add('faded-background');
        }
      }
    });
  }
}
