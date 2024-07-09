import { AffairService } from './../../../services/affair.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Academic } from '../../../common/academic';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.scss',
})
export class AcademicComponent implements OnInit {
  myReqApi: Academic[] = [];
  currPage: string = '';
  searchMode: boolean = false;
  searchName: string = '';
  constructor(
    private affair: AffairService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchName = this.route.snapshot.paramMap.get('search')!;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      // this.getAcadmicRequests();
      this.handleAcadmicRequests();
    });
    // this.acceptReq();
  }

  // getAcadmicRequests() {
  //   this.searchMode = this.route.snapshot.paramMap.has('search');
  //   if (this.searchMode) {
  //     this.handleSearchRequests();
  //   } else {
  //     this.handleAcadmicRequests();
  //   }
  // }
  // getAcadmicReqByName(type: string, name: string) {
  //   const hasParam: boolean = this.route.snapshot.paramMap.has('type');
  //   if (hasParam) {
  //     this.currPage = this.route.snapshot.paramMap.get('type')!;
  //   } else {
  //     this.currPage = 'pending';
  //   }
  //   this.affair.getRequestByName(type, name).subscribe((data) => {
  //     this.myReqApi = data;
  //   });
  // }

  // handleSearchRequests() {
  //   const hasParam: boolean = this.route.snapshot.paramMap.has('type');
  //   if (hasParam) {
  //     this.currPage = this.route.snapshot.paramMap.get('type')!;
  //   } else {
  //     this.currPage = 'pending';
  //   }
  //   this.affair
  //     .getRequestByName(this.currPage, this.searchName)
  //     .subscribe((data) => {
  //       this.myReqApi = data;
  //     });
  // }

  handleAcadmicRequests() {
    const hasParam: boolean = this.route.snapshot.paramMap.has('type');
    if (hasParam) {
      this.currPage = this.route.snapshot.paramMap.get('type')!;
    } else {
      this.currPage = 'pending';
    }
    return this.affair.getRequests(this.currPage).subscribe((data) => {
      this.myReqApi = data;
    });
  }
  // acceptReq() {
  //   console.log('donee');
  //   return this.http
  //     .put<any>('http://aidmstest.runasp.net/api/application/decline/1/3', '')
  //     .subscribe();
  // }

  openRequest(reqId: number) {
    this.router.navigate(['affair/academic/pending', reqId]);
  }
}
