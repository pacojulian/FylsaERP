import { Component, OnInit, Input } from '@angular/core';
import{Router} from '@angular/router';
import * as $ from 'jquery';
import {UserLogin} from '../Models/userLogin';
import {User} from '../Models/user';
import {LoginService} from './login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    sessionName:string;
    user:UserLogin

    @Input()
    userName: string;

    @Input()
    password: string;



  constructor(private router:Router,private loginService:LoginService,private cookieService: CookieService) {
      this.user = new UserLogin("","");
  }

  public ngOnInit() {
    this.sessionName=this.cookieService.get('User');
      console.log(this.sessionName);
      if(this.sessionName){

           this.router.navigate(['Dashboard']);
      }

  }
    loginUser(){
        this.user.user = this.userName;
        this.user.password = this.password;
          this.loginService.findOne(this.user).subscribe((res) =>{if(res!=null){
            this.cookieService.set( 'User', res.NAME ),this.cookieService.set('Admin',res.ADMIN_ID.toLocaleString()),this.cookieService.set('UserID',res._id.toLocaleString() )
              this.router.navigate(['Dashboard']);
          }else{
              alert("Usuario No Encontrado");
          }});


    }




}
