import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'adminpanel';
  showHead: boolean = false;

  user:any
  constructor(
    public router: Router
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }

  ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
     if(this.router){

     }

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
}
}

