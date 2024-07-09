import { Component, OnInit } from '@angular/core';
import { Academic } from '../../../common/academic';
import { ActivatedRoute } from '@angular/router';
import { AffairService } from '../../../services/affair.service';

@Component({
  selector: 'app-regs',
  templateUrl: './regs.component.html',
  styleUrl: './regs.component.scss',
})
export class RegsComponent implements OnInit {
  currPage: string = '';
  searchMode: boolean = false;
  searchName: string = '';
  myRegs: Academic[] = [];
  constructor(private affair: AffairService, private route: ActivatedRoute) {
    this.searchName = this.route.snapshot.paramMap.get('search')!;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleregsRequests();
    });
    // this.acceptReq();
  }

  handleregsRequests() {
    const hasParam: boolean = this.route.snapshot.paramMap.has('type');
    if (hasParam) {
      this.currPage = this.route.snapshot.paramMap.get('type')!;
    } else {
      this.currPage = 'pending';
    }
    return this.affair.getRegs(this.currPage).subscribe((data: any) => {
      this.myRegs = data;
    });
  }

  // acceptReq() {
  //   console.log('donee');
  //   return this.http
  //     .put<any>('http://aidmstest.runasp.net/api/application/decline/1/3', '')
  //     .subscribe();
  // }
}
