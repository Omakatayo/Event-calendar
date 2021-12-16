import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = 'http://localhost:8100/api/users';
  

  constructor(private http: HttpClient) { }

  async getUsers(): Promise<any> {
    return this.http.get<any>('https://dev-46503723.okta.com/api/v1/apps/0oa2xs8mqgUwmJyyF5d7/users').toPromise();
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  createUser(User: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, User);
  }

  updateUser(username: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${username}`, value);
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${username}`, { responseType: 'text' });
  }
  
}
