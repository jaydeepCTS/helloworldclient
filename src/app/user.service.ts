import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:9090/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  createUser(user: { firstName: string; lastName: string; age: number; Gender: string }) {
    return this.http.post(BASE_URL, user);
  }

  getAllUsers(){
    return this.http.get(BASE_URL);
  }

  constructor(public http: HttpClient) { }
}
