import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!:string;
  private apiUrl = 'http://localhost:3000'; //change with your api url

  constructor(private http: HttpClient) { }

  register(user:User) {
    return this.http.post(`${this.apiUrl}/examiner/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/examiner/login`, credentials);
  }

  setToken(token:string){
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  logout(){
    this.setToken('');
    return this.token="";
  }

}