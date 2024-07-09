import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doctorNotiClass } from '../common/student-class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Academic } from '../common/academic';
import { FormDataService } from './form-data.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorServService {
  private apiUrl: string = 'http://aidms.runasp.net/api/employee/notifications';
  private apiData: string = 'http://aidms.runasp.net/api';
  token? = this.getToken();

  constructor(private http: HttpClient, private form: FormDataService) {}

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  decodeToken(token: string): any {
    return jwtDecode(token);
  }
  getUserId(): number | null {
    const token = this.getToken();
    if (token) {
      const decoded = this.decodeToken(token);
      if (decoded.StdId) {
        return decoded.StdId; // Assuming 'nameid' contains the user ID
      } else {
        return decoded.EmpId; // Assuming 'nameid' contains the user ID
      }
    }
    return null;
  }
  getDoctortNoti(): Observable<doctorNotiClass[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    const id = this.getUserId();

    return this.http.get<doctorNotiClass[]>(`${this.apiUrl}/${id}`, {
      headers,
    })!;
  }

  getRequests(type: string): Observable<Academic[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    const id = this.getUserId();
    return this.http.get<any>(
      `${this.apiData}/application/${type}/supervisor/${id}`,
      {
        headers,
      }
    )!;
  }
}
