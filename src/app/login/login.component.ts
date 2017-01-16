import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.userName = '';

  }

  login() {
    let navigationExtras: NavigationExtras = {
      queryParams: { 'name': this.userName }
    };

    this._router.navigate([`/chat`], navigationExtras);
  }
}
