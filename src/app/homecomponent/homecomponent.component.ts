import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '../shared/okta/okta.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {
  public authenticated:any;
  public oktaAuth:any;
  public name:any;
  public acTok:any;
  constructor(private okta: OktaAuthService, private router: Router) {
    
   }

   ngOnInit() {
    //this.authenticated = await this.okta.isAuthenticated();
    // Subscribe to authentication state changes
    // this.oktaAuth.$authenticationState.subscribe(
    //   (isAuthenticated: boolean)  => this.authenticated = isAuthenticated
    // );
    this.name=Cookie.get("userName");
    this.acTok=Cookie.get("accessToken");
    //console.log(Cookie.get("userName"));
    // console.log(Cookie.get("accessToken"));
  
  }

}
