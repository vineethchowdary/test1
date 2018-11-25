import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CallbackComponent } from 'src/app/callback.component';
import { OktaAuthService } from 'src/app/shared/okta/okta.service';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { TestComponent } from './test/test.component';
const appRoutes: Routes = [
  {
    path:'', component: TestComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'home', component: HomecomponentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomecomponentComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    OktaAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
