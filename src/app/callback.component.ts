// callback.component.ts

import { Component } from '@angular/core';
import { OktaAuthService } from './shared/okta/okta.service';
import { Router } from '@angular/router';

@Component({ template: `` })
export class CallbackComponent {

  constructor(private okta: OktaAuthService, private router: Router) {
    // Handles the response from Okta and parses tokens
   this.okta.handleAuthentication();
    
  }

  
}