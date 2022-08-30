import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {UserFormComponent} from './Components/user-form/user-form.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './Components/about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserFormComponent,
    AboutUsComponent
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
