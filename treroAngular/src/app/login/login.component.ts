import { Component, OnInit } from '@angular/core';

import { AuthService } from './../shared/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  withError:boolean = false;
  errorMsg: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.withError = false;
    this.authService.login(form.value)
    .subscribe(data => {
      this.authService.setData(data);
      this.router.navigate(['/']);
    },
    (err: HttpErrorResponse) => {
      this.withError = !this.withError;
      this.errorMsg = err.error.msg;
    } );
  }

}
