import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { SettingsClass } from '../common/settings-class';

@Injectable({
  providedIn: 'root',
})
export class AdminService implements OnInit {
  private apiUrl: string = 'http://aidms.runasp.net/api/Employee';
  token = this.getToken();
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

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
  getEmployees() {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<any>(this.apiUrl + '/GetAllUsersWithRoles', {
      headers,
    })!;
  }
  deleteFun(id: number) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers })!;
  }
  postFun(body: any) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.post<any>(this.apiUrl, body, { headers })!;
  }
  getEmpSettings(id: number) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<any>(`${this.apiUrl}/settings/${id}`, { headers })!;
  }
  EditFun(id: number, body: any) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.put<any>(`${this.apiUrl}/${id}`, body, { headers })!;
  }
  getAdminSettings(): Observable<SettingsClass> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<any>(`${this.apiUrl}/settings/${this.getUserId()}`, {
      headers,
    })!;
  }
  changeAdminSettings(body: any): any {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.put<any>(
      `${this.apiUrl}/settings/${this.getUserId()}`,
      body,
      {
        headers,
      }
    )!;
  }
}
