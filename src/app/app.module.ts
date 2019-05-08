import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import {MenuModule} from './menu/menu.module';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminModule} from './admin/admin.module';
import {HttpClientModule} from '@angular/common/http';
import {UserModule} from './user/user.module';
import {RegisterComponent} from './user/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './user/login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';



const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'feedback', component: FeedbackComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    RouterModule.forRoot(routes),
    AdminModule,
    HttpClientModule,
    UserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJWI0mo3K5vY3U8tY9Ba9gBsWYPJC0aK4'
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
