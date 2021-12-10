import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly baseUrl = 'http://localhost:8200/api/events';
  

  constructor(private http: HttpClient) { }

  getEventList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getEventListOpen(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allopen`);
  }

  getEvent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getEventListByName(eventName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/byname/${eventName}`);
  }

  getEventListByStartDate(startDate: Date): Observable<any> {
    return this.http.get(`${this.baseUrl}/bydate/${startDate}`);
  }

  getEventListByAvailability(): Observable<any> {
    return this.http.get(`${this.baseUrl}/isavailable`);
  }

  getEventListByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/bycategory/${category}`);
  }

  getEventListByOrganizer(organizer: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/byorganizer/${organizer}`);
  }

  createEvent(Event: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, Event);
  }

  updateEvent(eventId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${eventId}`, value);
  }

  registerToEvent(eventId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/register/${eventId}`, value);
  }

  deleteEvent(eventId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${eventId}`, { responseType: 'text' });
  }
}
