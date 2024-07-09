import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl: string = 'http://aidms.runasp.net/api';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  sendIdSignup(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set Content-Type to application/json
    });
    return this.http.post<any>(
      `${this.apiUrl}/regestration/validate-national-id`,
      JSON.stringify(data),
      { headers }
    )!;
  }

  sendInfoSignup(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set Content-Type to application/json
    });
    return this.http.post<any>(
      `${this.apiUrl}/regestration/register`,
      JSON.stringify(data),
      { headers }
    )!;
  }
  uploadDocument(step: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('step', step);
    formData.append('file', file, file.name);

    return this.http.post(
      `${this.apiUrl}/regestration/upload-document`,
      formData
    );
  }
  submitDocument(): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/regestration/submit-application`,
      true
    );
  }
}
