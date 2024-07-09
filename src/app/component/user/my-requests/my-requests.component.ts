import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormDataService,
  studenRequest,
} from '../../../services/form-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss'],
})
export class MyRequestsComponent implements OnInit {
  myReqApi: studenRequest[] = [];
  currPage: string = '';
  constructor(
    private FormDataService: FormDataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getRequests();
    });
  }

  getRequests() {
    const hasParam: boolean = this.route.snapshot.paramMap.has('type');
    if (hasParam) {
      this.currPage = this.route.snapshot.paramMap.get('type')!;
    } else {
      this.currPage = 'pending';
    }
    return this.FormDataService.getRequests(this.currPage).subscribe((data) => {
      this.myReqApi = data;
    });
  }
}
