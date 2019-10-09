import { Injectable, EventEmitter } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = 'http://localhost:8000/api/';
  private isLogged = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  setData(data: any) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    this.emitState();
  }

  isAuthenticated() {
    return this.isLogged;
  }

  emitState() {
    this.isLogged.emit(this.getUser() ? true : false);
  }

  getToken() {
    return localStorage.getItem('token');
  }
 
  getUser() {
    return localStorage.getItem('user');
  }

  login(data: any) {
    return this.http.post(`${this.apiUrl}login`, data);
  }

  logout() {
    return this.http.get(`${this.apiUrl}logout`, { headers: new HttpHeaders({'Authorization': `Bearer ${this.getToken()}`})} );
  }

  revokeAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.emitState();
  }
}
