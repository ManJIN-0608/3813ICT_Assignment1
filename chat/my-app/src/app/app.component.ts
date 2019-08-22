import { Component } from '@angular/core';
import { Router }            from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  user = sessionStorage.getItem('user');

  constructor(private router:Router){ }

  ngOnInit(){
    
  }


  //logout the user and go back to the home page
  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
