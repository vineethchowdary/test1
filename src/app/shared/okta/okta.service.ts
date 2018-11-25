import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as OktaAuth from '@okta/okta-auth-js';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class OktaAuthService {

  oktaAuth = new OktaAuth({
    issuer: 'https://dev-827248.oktapreview.com/oauth2/default',
    redirectUri: 'http://localhost:4200/callback',
    clientId: '0oagltci9qE3gNGE80h7',
  });

  public accesTok: any;
  constructor(private router: Router) { }

  async isAuthenticated() {
    // Checks if there is a current accessToken in the TokenManger.
    //console.log(this.oktaAuth.tokenManager.get('accessToken'));
    return !!(await this.oktaAuth.tokenManager.get('accessToken'));
  }

  login() {
    // Launches the login redirect.
    this.oktaAuth.token.getWithRedirect({
      responseType: ['id_token', 'token'],
      scopes: ['openid', 'email', 'profile']
    });
  }

  async handleAuthentication() {
    const tokens = await this.oktaAuth.token.parseFromUrl();
    tokens.forEach(token => {
      if (token.idToken) {
        this.oktaAuth.tokenManager.add('idToken', token);
        // console.log(token.idToken);
        // console.log(token.claims.name);
        // console.log(token.claims.email);

      }
      if (token.accessToken) {
        this.oktaAuth.tokenManager.add('accessToken', token);
        //console.log(token.accessToken);
        this.accesTok = token.accessToken;
        //console.log(token);
        //this.getInfo();
        this.getUsrInfo(token);
        //console.log(this.accesTok);
      }

    });
    //     this.oktaAuth.token.getUserInfo()
    // .then(function(user) {
    //   // user has details about the user
    // });

  }

  async logout() {
    //console.log(this.oktaAuth.tokenManager.get("accessToken"));
    // this.oktaAuth.tokenManager.get('idToken')
    //   .then(function (token) {
    //     if (token) {
    //       // Token is valid
    //       //console.log(token);
    //     } else {
    //       // Token has expired
    //     }
    //   })
    //   .catch(function (err) {
    //     // OAuth Error
    //     console.error(err);
    //   });


    this.oktaAuth.tokenManager.clear();
    //console.log(this.oktaAuth.tokenManager);
    //await this.oktaAuth.logout();

    await this.oktaAuth.signOut();
      // .then(function () {
      //   console.log('successfully logged out');
         Cookie.delete("userName");
      //   Cookie.delete("accessToken");

      // })
      // .fail(function (err) {
      //   console.error(err);
      // });
    this.router.navigate(['/']);
  }

  async getInfo() {
    let token= await this.oktaAuth.tokenManager.get('accessToken');
    console.log(token);
      // .then(function (token) {
      //   if (token) {
      //     // Token is valid
      //     //console.log(token);
      //     //console.log(token);
      //   } else {
      //     // Token has expired
      //   }
      // })
      // .catch(function (err) {
      //   // OAuth Error
      //   console.error(err);
      // });
    //console.log(data);
    // await this.oktaAuth.token.getUserInfo(data)
    //   .then(function (user) {
    //     // user has details about the user
    //     console.log(user);
    //   });
  }

  async getUsrInfo(token) {
    //console.log(token);
    Cookie.set("accessToken", token.accessToken);
    //console.log(Cookie.get("accessToken"));
    let user = await this.oktaAuth.token.getUserInfo(token);
      // .then(function (user) {
      //   //console.log(user);
        Cookie.set("userName", user.name);
      //   //console.log(Cookie.get('userName'));
      this.router.navigate(['/home']);
      // });
      //console.log(user);
  }
}