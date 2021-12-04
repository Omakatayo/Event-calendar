import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly baseUrl = 'http://localhost:8300/api/register';
  

  constructor(private http: HttpClient) { }

  getRegistrationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getUsersRegisteredToEvent(eventId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/byevent/${eventId}`);
  }

  getRegisteredByUser(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/byusername/${username}`);
  }

  register(eventId: number, username: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}?eventId=eventId&username=username`, value);
  }

  unregister(eventId: number, username: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/unregister?eventId=eventId&username=username`, { responseType: 'text' });
  }
}
