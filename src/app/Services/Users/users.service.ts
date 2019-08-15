import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { of, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "http://localhost:4000";

  httpOptions ={
    headers: new HttpHeaders({ 'content-type':'application/json' })
  }

  constructor(private http: HttpClient) { }

  login(data) {
        const user_data ={
          username: data.username,
          password: data.password,
        }

        return this.http.post(`${this.url}/users/login`, user_data, this.httpOptions);
  }

  get_user_data(){
    return JSON.parse(localStorage.getItem('user'));
  }
  logout(){
    localStorage.removeItem('user');
  }
}
