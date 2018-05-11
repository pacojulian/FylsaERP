import { Component, OnInit, Input } from '@angular/core';
import{Router} from '@angular/router'
import * as $ from 'jquery';
import {UserLogin} from '../Models/userLogin';
import {User} from '../../Models/user';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    
    user:UserLogin
    
    @Input()
    userName: string;

    @Input()
    password: string;

    
     
  constructor(private router:Router,private loginService:LoginService) {
      this.user = new UserLogin("","");
  }

  public ngOnInit() {


  }
    loginUser(){
        this.user.user = this.userName;
        this.user.password = this.password;
        //alert(this.userName + this.password);
        //console.log(this.user)
          this.loginService.findOne(this.user).subscribe((res) =>if(res!=null){
              this.router.navigate(['Dashboard']);
          }else{
              alert("Usuario No Encontrado");
          });
        
        
    }
}
