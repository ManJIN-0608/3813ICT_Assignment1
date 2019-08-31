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
  username="";
  user = [];
  users = [];

  newUser = "";
  newEmail = "";
  newRole = "";

  groupname="";
  groups = [];
  newGroup = "";

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

  createGroup(){
    let userObj = {
      "newGroup" : ""
    }

    userObj.newGroup = this.newGroup;

    this.http.post<any>(BACKEND_URL + "/addGroup", userObj).subscribe((data) => {
      console.log(data);
      if(data != "Group exists"){
        console.log(data);
        this.groups = data;
      }else{
        console.log(data);
        this.error = data;
      }
    });
  }

  deleteGroup(){
    let userObj = {"groupname" : this.groupname};
    this.http.post<any>(BACKEND_URL + "/deleteGroup", userObj).subscribe((data) => {
      console.log(data);
      this.groups = data;
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

  fetchAllGroups(){
    let userObj = {"groupname" : this.groupname};
    this.http.post<any>(BACKEND_URL + "/fetchAllGroups", userObj).subscribe((data) => {
      console.log(data);
      this.groups = data;
    });
  }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    this.fetchUser();
    this.fetchAllUsers();
    this.fetchAllGroups();
  }

  logout(){
    console.log('Log out');
    localStorage.clear();
    console.log(localStorage);
    this.router.navigateByUrl("/");
  }

}
