import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const BACKEND_URL = "http://localhost:3000";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username;
  user = [];
  users = [];

  newUser = "";
  newEmail = "";
  newRole = "";

  error = '';

  constructor(private forms:FormsModule, private router:Router, private http:HttpClient) { }

  createUser(){
    let userObj = {
      "newUser" : "",
      "newEmail" : "",
      "newRole" : "",
    }

    userObj.newUser = this.newUser;
    userObj.newEmail = this.newEmail;
    userObj.newRole = this.newRole;

    this.http.post<any>(BACKEND_URL + "/addUser", userObj).subscribe((data) => {
      console.log(data);
      if(data != "User exists"){
        console.log(data);
        this.users = data;
      }else{
        console.log(data);
        this.error = data;
      }
    });
  }

  deleteUser(){
    let userObj = {"username" : this.username};
    this.http.post<any>(BACKEND_URL + "/deleteUser", userObj).subscribe((data) => {
      console.log(data);
      this.users = data;
    })
  }

  fetchUser(){
    let userObj = {"username" : this.username};
    this.http.post<any>(BACKEND_URL + "/fetchUser", userObj).subscribe((data) => {
      // console.log(data);
      this.user = data;
    });
  }

  fetchAllUsers(){
    let userObj = {"username" : this.username};
    this.http.post<any>(BACKEND_URL + "/fetchAllUsers", userObj).subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }

  // logout(){
  //   localStorage.clear();
  //   this.router.navigateByUrl("/login");
  // }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    this.fetchUser();
    this.fetchAllUsers();
  }

}
