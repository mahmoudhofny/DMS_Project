import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  apiUrl: string = 'http://aidms.runasp.net/api/documents';
  constructor(private http: HttpClient) {}

  getDocuments() {
    return this.http.get<any>(`${this.apiUrl}`)!;
  }
}
