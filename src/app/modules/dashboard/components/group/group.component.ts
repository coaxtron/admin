import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  isPopupOpened = true;


  displayedColumns: string[] = ['id', 'group', 'action'];
  dataSource = new MatTableDataSource<any>();


  checkScreen:any;

  constructor(
    private ds:DashboardService
  ) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');

    // this.ds.checkUSerScreen(user.user_employee_id).subscribe(res => {
    //   this.checkScreen = res;

    // })

    this.ds.checkUSerScreen(user.user_employee_id).subscribe(res => {
      this.checkScreen = res;

    })
    this.ds.group().subscribe(res => {
      this.dataSource = res;
    }
    )
  }



  addMovie() {

  }


  editMovie(data: any) {

  }

  deleteMovie(id: number) {
    // this.movieService?.deleteMovie(id);
  }

}
