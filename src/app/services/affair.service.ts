import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Academic } from '../common/academic';
import { jwtDecode } from 'jwt-decode';
import { StudentNotiClass } from '../common/student-class';
import { SettingsClass } from '../common/settings-class';

@Injectable({
  providedIn: 'root',
})
export class AffairService {
  apiUrl: string = 'http://aidms.runasp.net/api';

  token = this.getToken();

  constructor(private http: HttpClient) {}

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
      return decoded.EmpId; // Assuming 'nameid' contains the user ID
    }
    return null;
  }

  getRequests(type: string): Observable<Academic[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<any>(`${this.apiUrl}/application/${type}/employee`, {
      headers,
    })!;
  }
  getRequestByName(type: string, name: string) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<any>(
      `${this.apiUrl}/application/${type}/employee/${name}`,
      {
        headers,
      }
    )!;
  }
  getRegs(type: string): any {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<any>(
      `${this.apiUrl}/application/${type}/registeration`,
      {
        headers,
      }
    )!;
  }

  //  Noti

  getAffairtNoti(): Observable<StudentNotiClass[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<StudentNotiClass[]>(
      `${this.apiUrl}/employee/notifications/${this.getUserId()}`,
      { headers }
    );
  }

  // GET REQ BY ID

  getDocumentById(reqId: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<any>(`${this.apiUrl}/documents/${reqId}`, {
      headers,
    })!;
  }
  getAllDocument(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<any>(`${this.apiUrl}/documents`, {
      headers,
    })!;
  }
  acceptFun(appId: number | null): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.put<any>(
      `${this.apiUrl}/application/accept/${this.getUserId()}/${appId}`,
      {},
      {
        headers,
      }
    )!;
  }
  declineFun(appId: number | null): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.put<any>(
      `${this.apiUrl}/application/decline/${this.getUserId()}/${appId}`,
      {},
      {
        headers,
      }
    )!;
  }

  getAffairSettings(): Observable<SettingsClass> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<any>(
      `${this.apiUrl}/employee/settings/${this.getUserId()}`,
      {
        headers,
      }
    )!;
  }
}
