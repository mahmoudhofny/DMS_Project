import { Injectable } from '@angular/core';
import { Request } from './../Model/request';

@Injectable({
  providedIn: 'root',
})
export class StaticRequestsService {
  requests: Request[];
  constructor() {
    this.requests = [
      {
        id: 1,
        showName: 'Academic Transcript',
        name: 'trascript',
      },
      {
        id: 2,
        showName: 'Enrollment Proof',
        name: 'enrollmentproof',
      },
      {
        id: 3,
        showName: 'Material Registration',
        name: 'material',
      },
      {
        id: 4,
        showName: 'Military Education',
        name: 'military',
      },
      {
        id: 5,
        showName: 'Expenses Payment',
        name: 'expenses',
      },
    ];
  }

  getAllReqests() {
    return this.requests;
  }
  getRequestById(reqId: number): Request | undefined {
    return this.requests.find((requests) => requests.id == reqId);
  }
}
