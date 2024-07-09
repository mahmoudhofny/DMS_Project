import { Component, OnInit } from '@angular/core';
import { AffairService } from '../../../../services/affair.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aca-request',
  templateUrl: './aca-request.component.html',
  styleUrl: './aca-request.component.scss',
})
export class AcaRequestComponent implements OnInit {
  reqId: number = 0;
  theDocment: any;
  constructor(private affair: AffairService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.reqId = Number(this.route.snapshot.paramMap.get('id'));
    this.getDocmentById();
  }

  getDocmentById(): any {
    this.affair.getDocumentById(this.reqId).subscribe((data) => {
      this.theDocment = data;
    });
  }

  accept(id: any) {
    return this.affair.acceptFun(id).subscribe();
  }
  decline(id: any) {
    return this.affair.declineFun(id).subscribe();
  }
}
