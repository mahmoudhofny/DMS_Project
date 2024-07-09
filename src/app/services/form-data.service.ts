import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { SettingsClass } from '../common/settings-class';
import { StudentClass, StudentNotiClass } from '../common/student-class';

@Injectable({
  providedIn: 'root',
})
export class FormDataService implements OnInit {
  private apiUrl: string = 'http://aidms.runasp.net/api/Auth';
  userId?: number | null;
  private apiData: string = `http://aidms.runasp.net/api/Student`;
  private theSuperApi: string = `http://aidms.runasp.net/api/employee/GetAllSupervisors`;
  token? = this.getToken();
  // decode = this.decodeToken(this.token);
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  login(data: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, data)!;
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  decodeToken(token: string): any {
    return jwtDecode(token);
  }
  isUserLogin() {
    return localStorage.getItem('token') ? true : false;
  }
  logout() {
    localStorage.clear();
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

  registerFun(data: any) {
    return this.http.post<any>(
      `${this.apiUrl}/api/regestration/register`,
      data
    )!;
  }

  getRequests(type: string): Observable<studenRequest[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<any>(`${this.apiData}/${type}/${this.getUserId()}`, {
      headers,
    })!;
  }
  getStudentNoti(): Observable<StudentNotiClass[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<StudentNotiClass[]>(
      `${this.apiData}/notifications/${this.getUserId()}`,
      { headers }
    );
  }
  getStudentData(): Observable<StudentClass> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<StudentClass>(`${this.apiData}/${this.getUserId()}`, {
      headers,
    })!;
  }
  getStudentSettings(): Observable<SettingsClass> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get<any>(`${this.apiData}/settings/${this.getUserId()}`, {
      headers,
    })!;
  }
  changeStudentSettings(body: any): any {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.put<any>(
      `${this.apiData}/settings/${this.getUserId()}`,
      body,
      { headers }
    )!;
  }
  postRequest(name: string | null, body: any) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.post(`${this.apiData}/${name}`, body, {
      headers,
    });
  }
  //

  requestPayment(
    route: string | null,
    description: string,
    studentId: string,
    studentDocument: File,
    superName?: string
  ): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('Description', description);
    formData.append('StudentId', studentId.toString());
    formData.append('StudentDocument', studentDocument, studentDocument.name);

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );

    return this.http.post(`${this.apiData}/${route}/${superName}`, formData, {
      headers,
    });
  }
  //
  GetAllSupervisors() {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get(this.theSuperApi, {
      headers,
    });
  }
}
export interface studenRequest {
  id: number;
  documentName: string;
  status: string;
  uploadedAt: string;
  isAccepted: boolean;
}
