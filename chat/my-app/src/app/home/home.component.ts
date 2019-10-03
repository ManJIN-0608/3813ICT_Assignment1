import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SocketService } from '../services/socket.service';
import { ImguploadService } from '../services/imgupload.service';

const BACKEND_URL = "http://localhost:3000";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // private socket;
  // roomnotice:string="";
  // currentroom:string="";
  // isinRoom=false;
  // numusers:number=0;

  messagecontent: string="";
  messages: string[] = [];
  ioConnection: any;

  title = 'app';
  selectedfile = null;
  imagepath = "";

  // User
  username="";
  user = [];
  users = [];

  // New user
  newUser = "";
  newPassword = "";
  newEmail = "";
  newRole = "";

  // Group
  groupname="";
  groups = [];

  // New group
  newGroup = "";

  // Channel
  channelname="";
  channels = [];

  // New channel
  newChannel="";

  error = '';

  constructor(private forms:FormsModule, private router:Router, private http:HttpClient, private socketService:SocketService, private imguploadService:ImguploadService) { }


  // Create a user
  createUser(){
    let userObj = {
      "newUser" : "",
      "newPassword" : "",
      "newEmail" : "",
      "newRole" : "",
    }

    userObj.newUser = this.newUser;
    userObj.newPassword = this.newPassword;
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

  // Delete a user
  deleteUser(){
    let userObj = {"username" : this.username};
    this.http.post<any>(BACKEND_URL + "/deleteUser", userObj).subscribe((data) => {
      console.log(data);
      this.users = data;
    })
  }

  // Create a group
  createGroup(){
    let groupObj = {
      "groupname" : this.newGroup
    }

    this.http.post<any>(BACKEND_URL + "/addGroup", groupObj).subscribe((data) => {
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
  
  // Delete a group
  deleteGroup(){
    let userObj = {"groupname" : this.groupname};
    this.http.post<any>(BACKEND_URL + "/deleteGroup", userObj).subscribe((data) => {
      console.log(data);
      this.groups = data;
    })
  }

  // Add exist user to group
  addUsersToGroup(){
    let userObj = {
      "groupname" : this.groupname,
      "username" : this.username
    }

    this.http.post<any>(BACKEND_URL + "/addUsersToGroup", userObj).subscribe((data) => {
      if(data){
        console.log(data);
        this.groups = data;
      }else{
        console.log(data);
        this.error = data;
      }
    });
  }

  // Delete users from group
  deleteUsersFromGroup(){
    let userObj = {
      "groupname" : this.groupname,
      "username" : this.username
    }

    this.http.post<any>(BACKEND_URL + "/deleteUsersFromGroup", userObj).subscribe((data) => {
      if(data){
        console.log(data);
        this.groups = data;
      }else{
        console.log(data);
        this.error = data;
      }
    });
  }

  // Create a channel
  createChannel(){
    let channelObj = {
      "channelname" : this.newChannel,
      "groupname" : this.groupname
    }

    this.http.post<any>(BACKEND_URL + "/addChannel", channelObj).subscribe((data) => {
      console.log(data);
      if(data != "Channel exists"){
        console.log(data);
        this.channels = data;
      }else{
        console.log(data);
        this.error = data;
      }
    });
  }

  // Delete a channel
  deleteChannel(){
    let userObj = {"channelname" : this.channelname};
    this.http.post<any>(BACKEND_URL + "/deleteChannel", userObj).subscribe((data) => {
      console.log(data);
      this.channels = data;
    })
  }

  // Add exist user to channel
  addUsersToChannel(){
    let userObj = {
      "channelname" : this.channelname,
      "username" : this.username
    }

    this.http.post<any>(BACKEND_URL + "/addUsersToChannel", userObj).subscribe((data) => {
      if(data){
        console.log(data);
        this.channels = data;
      }else{
        console.log(data);
        this.error = data;
      }
    });
  }

  // Delete users from channel
  deleteUsersFromChannel(){
    let userObj = {
      "channelname" : this.channelname,
      "username" : this.username
    }

    this.http.post<any>(BACKEND_URL + "/deleteUsersFromChannel", userObj).subscribe((data) => {
      if(data){
        console.log(data);
        this.channels = data;
      }else{
        console.log(data);
        this.error = data;
      }
    });
  }

  // Fetch the information of login user
  fetchUser(){
    let userObj = {"username" : this.username};
    this.http.post<any>(BACKEND_URL + "/fetchUser", userObj).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

  // Fetch all users' information expect current user
  fetchAllUsers(){
    let userObj = {"username" : this.username};
    this.http.post<any>(BACKEND_URL + "/fetchAllUsers", userObj).subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }

  // Fetch all groups
  fetchAllGroups(){
    let userObj = {"groupname" : this.groupname};
    this.http.post<any>(BACKEND_URL + "/fetchAllGroups", userObj).subscribe((data) => {
      console.log(data);
      this.groups = data;
    });
  }

  // Fetch all channels
  fetchAllChannels(){
    let userObj = {"channelname" : this.channelname};
    this.http.post<any>(BACKEND_URL + "/fetchAllChannels", userObj).subscribe((data) => {
      console.log(data);
      this.channels = data;
    });
  }

  // Logout and clear localstorage
  logout(){
    console.log('Log out');
    localStorage.clear();
    console.log(localStorage);
    this.router.navigateByUrl("/");
  }
 
  ngOnInit() {
    this.initIoConnection();
    // this.socketService.initSocket();
    // this.socketService.getMessage((m)=>{this.messages.push(m)});
    // this.socketService.reqroomList();
    // this.socketService.getroomList((msg)=>{this.channels=JSON.parse(msg)});
    // this.socketService.notice((msg)=>{this.roomnotice=msg});
    // this.socketService.joined((msg)=>{this.currentroom=msg});
    // if (this.currentroom != "") {
    //   this.isinRoom = true;
    // } else {
    //   this.isinRoom = false;
    // }
    // Remember the logged in username
    this.username = localStorage.getItem("username");
    this.fetchUser();
    this.fetchAllUsers();
    this.fetchAllGroups();
    this.fetchAllChannels();
  }

  // Add new message to the message array
  private initIoConnection(){
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage()
      .subscribe((message:string) => {
        this.messages.push(message);
      });
  }

  // Chat function
  chat(){
    if(this.messagecontent){
      // Check there is a message to send
      this.socketService.send(this.messagecontent);
      this.messagecontent=null;
    }else{
      console.log("no message");
    }
  }

  // Image uploade
  onFileSelected(event){
    console.log(event);
    this.selectedfile = event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedfile, this.selectedfile.name);
    this.imguploadService.imgupload(fd).subscribe(res=>{
      this.imagepath = res.data.filename;
      console.log(res.data.filename + ' , ' + res.data.size);
    });
  }

  // Not figured out

  // joinroom() {
  //   this.socketService.joinroom(this.channelname);
  //   this.socketService.reqnumusers(this.channelname);
  //   this.socketService.getnumusers((res)=>{this.numusers = res});
  // }

  // clearnotice() {
  //   this.roomnotice = "";
  // }

  // leaveroom() {
  //   this.socketService.leaveroom(this.currentroom);
  //   this.socketService.reqnumusers(this.currentroom);
  //   this.socketService.getnumusers((res)=>{this.numusers = res});
  //   this.channelname = null;
  //   this.currentroom = "";
  //   this.isinRoom = false;
  //   this.numusers = 0;
  //   this.roomnotice = "";
  //   this.messages = [];
  // }

  // chat() {
  //   if (this.messagecontent) {
  //     this.socketService.sendMessage(this.messagecontent);
  //     this.messagecontent = null;
  //   } else {
  //     console.log("No Message");
  //   }
  // }

}
