import { Component, OnInit } from '@angular/core';
import User from "../../entity/User";
import {UserService} from "src/app/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  user:User =new User();

  users:User[]=[];


  save(){
    const observable=this.userService.createUser(this.user);
    observable.subscribe((response:any)=>{
      console.log(response)
    },(error)=>{
      console.log(error)
    })
  }

  getUsers(){
    const observable=this.userService.getAllUsers();
    observable.subscribe((response:any)=>{
      console.log(response)
      this.users=response as User[];
    },(error)=>{
      console.log(error)
    })
  }

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
}