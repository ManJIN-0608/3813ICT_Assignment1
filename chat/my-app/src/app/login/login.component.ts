import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const BACKEND_URL = "http://localhost:3000";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username = "";
  access = false;
  errorMsg = "You aren't real";

  constructor(private router:Router, private form:FormsModule, private http:HttpClient) { }

  ngOnInit() {
  }

  login(){
    let userObj = {username: this.username};

    this.http.post<any>(BACKEND_URL + "/checkUser", userObj).subscribe((data) =>{
      if(data){
        this.access = true;
        console.log(userObj);
        localStorage.setItem("username", this.username);
        console.log(data);
        console.log(localStorage.getItem('username'));
        this.router.navigateByUrl("/home")
      }else{
        console.log(this.errorMsg);
        this.access = false;
      }
    })
  }

}
