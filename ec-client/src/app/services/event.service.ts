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

  async getEventListOpen(): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}/allopen`).toPromise();
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

  async getEventListByOrganizer(organizer: string): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}/byorganizer/${organizer}`).toPromise();
  }

  async getEventByParameter(searchType: string, parameter: any): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}/${searchType}${parameter}`).toPromise();
  }

  async getEventNameById(eventId: number): Promise<any> {
    return this.http.get(`${this.baseUrl}/namebyid/${eventId}`, {responseType: 'text'}).toPromise();
  }

  createEvent(Event: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, Event);
  }

  updateEvent(eventId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${eventId}`, value);
  }

  async registerToEvent(eventId: number, value: any): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/register/${eventId}`, value).toPromise();
  }

  async unregisterFromEvent(eventId: number, value: any): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/unregister/${eventId}`, value).toPromise();
  }

  deleteEvent(eventId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${eventId}`, { responseType: 'text' });
  }
}
