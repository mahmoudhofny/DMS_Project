import { Component } from '@angular/core';
import { DoctorServService } from '../../../services/doctor-serv.service';
import { ActivatedRoute } from '@angular/router';
import { Academic } from '../../../common/academic';

@Component({
  selector: 'app-material-doctor',
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
})
export class MaterialComponent {
  myReqApi: Academic[] = [];
  currPage: string = '';
  searchMode: boolean = false;
  searchName: string = '';
  constructor(
    private doctor: DoctorServService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getRequests();
    });
    // this.acceptReq();
  }
  getRequests() {
    const hasParam: boolean = this.route.snapshot.paramMap.has('type');
    if (hasParam) {
      this.currPage = this.route.snapshot.paramMap.get('type')!;
    } else {
      this.currPage = 'pending';
    }
    this.doctor.getRequests(this.currPage).subscribe((data) => {
      console.log(data);
    });
  }
}
