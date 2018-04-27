import { Component, OnInit, Input } from '@angular/core';
import{Router} from '@angular/router'
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @Input()
    userName: string;

    @Input()
    password: string;

  constructor(
      private router:Router
  ) { }

  public ngOnInit() {
     

  }
    loginUser(){
        //alert(this.userName + this.password);
        this.router.navigate(['Dashboard']);
    }
}
