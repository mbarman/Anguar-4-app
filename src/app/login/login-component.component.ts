import { EventEmitter } from 'events';
import { LoginService } from './login.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccessCheckService } from '../service/access-check.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

 // @Output() notify: EventEmitter<string> = new EventEmitter<string> () ;

  constructor(private _router: Router,
              private _loginService: LoginService,
              private _accessCheck: AccessCheckService) { }

  userName: any;
  password: any;

 

  handleSuccess(response: any) {
    this.callPermissionService();
  }

  success(response: any) {
    this._accessCheck.setValue(response.result);
    console.log(this._accessCheck.getValue());

    this._router.navigate(['/home']);
  }

  handleError(error: any) {
    console.log(error);
    alert(error);
  }

  callPermissionService() {
    this._accessCheck.getPermission()
      .subscribe(
      (response) => this.success(response),
      (err) => this.handleError(err)
      );
  }



  loginToBedrock() {
   const data = {
      'username': this.userName,
      'password': this.password,
      'permissionNeeded': 'true'
    };

    this._loginService.login(data)
      .subscribe(
      (response) => this.handleSuccess(response),
      (err) => this.handleError(err)
      );
  }


}
