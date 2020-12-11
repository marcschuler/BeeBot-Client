import { Component, OnInit } from '@angular/core';
import {LoginService, Login} from '../services/login.service';
import {RestService} from '../services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.page.html',
  styleUrls: ['./server.page.scss'],
})
export class ServerPage implements OnInit {



  login: Login = new Login();

  loginState = 0; // 0 none, 1 loading, 2 success, 3 error
  loginError: string = null;
  loginErrorText: string = null;

  constructor(public data: LoginService, public rest: RestService, public router: Router) { }

  ngOnInit() {
  }

  testLogin() {
    this.loginState = 1;
    this.rest.get('login/test', this.login).subscribe(s => {
      console.log('login success');
      this.loginState = 2;
      this.loginError = null;
      this.loginErrorText = null;
      this.data.saveLogin(this.login);
      this.router.navigateByUrl('/server');
    }, e => {
      console.log('could not login: ' + JSON.stringify(e));
      this.loginState = 3;
      this.loginError = e;
      this.loginErrorText = this.rest.errorText(e);
    });
  }
}
