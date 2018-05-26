import { Injectable } from '@angular/core';
import{Router} from '@angular/router';
import { HttpClient, HttpHeaders,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserLogin} from '../Models/userLogin';
import {User} from '../Models/user';



@Injectable()
export class LoginService {
  apiRoot: string = "http://localhost:8080";
  constructor(private router:Router, private http:HttpClient) { }


    findOne(UserLogin):Observable<User>{

            let url = `${this.apiRoot}/auth/login`;
         return this.http.post<User>(url,UserLogin);

    }

    // loginUser(){
    //     //alert(this.userName + this.password);
    //     this.router.navigate(['Dashboard']);
    // }

}
