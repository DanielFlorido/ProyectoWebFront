import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEntity } from '../../model/user/user-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient
  ) { }


  login(user:UserEntity):Observable<UserEntity>{
    return this.http.post<UserEntity>("http://localhost:8090/auth/login",user);
  }
}
