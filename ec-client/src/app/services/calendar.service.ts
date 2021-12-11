import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private readonly baseUrl = 'http://localhost:8400/api/calendars';
  

  constructor(private http: HttpClient) { }

  getCalendar(calendarId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${calendarId}`);
  }

  getCalendarListByUsername(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/byusername/${username}`);
  }

  createCalendar(Calendar: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, Calendar);
  }

  async addEventToCalendar(calendarId: number, eventId: number, value: any): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/addevent?calendarId=${calendarId}&eventId=${eventId}`, value).toPromise();
  }

  async removeEventFromCalendar(calendarId: number, eventId: number, value: any): Promise<any> {
    return this.http.put(`${this.baseUrl}/removeevent?calendarId=${calendarId}&eventId=${eventId}`, value).toPromise();
  }

  deleteCalendar(calendarId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${calendarId}`, { responseType: 'text' });
  }
}
