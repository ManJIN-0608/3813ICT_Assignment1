import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }       from './routes/login/login.component';
import { ChatComponent }        from './routes/chat/chat.component';
import { HomeComponent }        from './routes/home/home.component';
import { RegisterComponent }    from './routes/register/register.component';
import { DashboardComponent }   from './routes/dashboard/dashboard.component';

const routes: Routes = [
  {path: '',          component:HomeComponent},
  {path: 'login',     component:LoginComponent},
  {path: 'chat',      component:ChatComponent},
  {path: 'register',  component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
