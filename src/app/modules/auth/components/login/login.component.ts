import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFrom = new FormGroup({
    login_name: new FormControl(''),
    pwd_hash: new FormControl('')
  })

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginFrom = this.fb.group({
      login_name: ['',([Validators.required])],
      pwd_hash: ['',([Validators.required])],
    })
  }

  login() {
    this.auth.login(this.loginFrom.getRawValue()).subscribe(res => {
    if(res = res.user_employee_id){
      this.router.navigate(['/dashboard']);
    }else {
      console.log('error');

    }
    }
    )
    console.log(this.loginFrom.getRawValue());
  }

}
