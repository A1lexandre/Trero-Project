import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  createUser(data: User) {
    return this.http.post(`${this.apiUrl}create`, data);
  }

}
