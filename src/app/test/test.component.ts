import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '../shared/okta/okta.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public authenticated:any;
  public oktaAuth:any;
  constructor(private okta: OktaAuthService, private router: Router) {
    //this.authenticated = okta.isAuthenticated();
    this.oktaAuth = okta;
  }
  async ngOnInit() {
    this.authenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    // this.oktaAuth.$authenticationState.subscribe(
    //   (isAuthenticated: boolean)  => this.authenticated = isAuthenticated
    // );
  }

  public getLogin()
  {
    this.oktaAuth.login().subscribe((data:any) => {
      console.log(data);
    },error =>{console.log(error)});

  }

}
