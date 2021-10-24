import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PrivillegeComponent } from '../privillege/privillege.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public loginFrom = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loginFrom = this.fb.group({
      username: ['',([Validators.required])],
      password: ['',([Validators.required])],
    })
  }

  login() {
    console.log(this.loginFrom.getRawValue());
  }

  privillage() {
    const dialogRef = this.dialog.open(PrivillegeComponent, {
      width: '250px',
      data:''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  }


