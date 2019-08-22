import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { FormsModule }       from '@angular/forms';
import { User }              from '../../models/user/user.model';
import { UserJSONHelper } from '../../helpers/userJSON.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public user : User;
  connection;

  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
    
  }

  loginUser(){
    
  }
}
