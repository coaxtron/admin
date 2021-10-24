import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-privillege',
  templateUrl: './privillege.component.html',
  styleUrls: ['./privillege.component.scss']
})
export class PrivillegeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PrivillegeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
