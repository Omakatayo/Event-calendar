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

  async register(value: any): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}`, value).toPromise();
  }

  async unregister(eventId: number, username: string): Promise<any> {
    return this.http.delete<any>(`${this.baseUrl}?eventId=${eventId}&username=${username}`).toPromise();
  }
}
