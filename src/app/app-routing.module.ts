import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { UserFormComponent } from './Components/user-form/user-form.component';

const routes: Routes = [{path:"userform",component:UserFormComponent},{path:"aboutus",component:AboutUsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
