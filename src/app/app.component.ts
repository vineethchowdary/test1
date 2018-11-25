import { Component } from '@angular/core';
import { OktaAuthService } from './shared/okta/okta.service';
import { Router } from '@angular/router';
// import { OktaAuthService } from '@okta/okta-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
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
}