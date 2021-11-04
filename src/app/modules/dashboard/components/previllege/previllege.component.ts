import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-previllege',
  templateUrl: './previllege.component.html',
  styleUrls: ['./previllege.component.scss']
})
export class PrevillegeComponent implements OnInit {
  privileges!: FormGroup;

  constructor( private fb: FormBuilder,public dialogRef: MatDialogRef<PrevillegeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.privileges = this.fb.group({
      user:this.fb.group({
        edit: false,
        delete: false,
        create: false,
      }),
      group:this.fb.group({
        edit: false,
        delete: false,
        create: false,
      }),
      organization:this.fb.group({
        edit: false,
        delete: false,
        create: false,
      })


    });
  }

  onNoClick(): void {
    // console.log(this.privileges?.getRawValue());

    this.dialogRef.close(this.privileges?.getRawValue());
  }
  submit() {
    this.dialogRef.close({data:this.privileges?.getRawValue()});
  }
}
