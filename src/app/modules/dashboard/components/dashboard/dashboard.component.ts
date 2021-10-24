import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  checkScreen:any;

  constructor(
    private ds:DashboardService
  ) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');

    this.ds.checkModule(user.user_employee_id).subscribe(res => {
      this.checkScreen = res;

    })
  }

}
