import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'adminpanel';

  user:any
  constructor(
    public router: Router
  ) {

  }

  ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
}
}

