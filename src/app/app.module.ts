import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {UserFormComponent} from './Components/user-form/user-form.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HomeComponent } from './Components/home/home.component';
import { PipeDemoComponent } from './Components/pipe-demo/pipe-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserFormComponent,
    AboutUsComponent,
    HomeComponent,
    PipeDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
