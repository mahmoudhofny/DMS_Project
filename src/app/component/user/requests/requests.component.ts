import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Request } from '../../../Model/request';
import { StaticRequestsService } from '../../../services/static-requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent {
  requests: Request[];
  constructor(
    private router: Router,
    StaticRequestsService: StaticRequestsService
  ) {
    this.requests = StaticRequestsService.requests;
  }
  openRequest(reqName: string) {
    this.router.navigate(['home/requests/request', reqName]);
  }
}
