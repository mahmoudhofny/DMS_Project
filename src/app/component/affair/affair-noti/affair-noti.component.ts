import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentNotiClass } from '../../../common/student-class';
import { FormDataService } from '../../../services/form-data.service';
import { AffairService } from '../../../services/affair.service';

@Component({
  selector: 'app-affair-noti',
  templateUrl: './affair-noti.component.html',
  styleUrl: './affair-noti.component.scss',
})
export class AffairNotiComponent implements OnInit {
  notis: StudentNotiClass[] = [];
  constructor(
    public dialogRef: MatDialogRef<AffairNotiComponent>,
    private affair: AffairService
  ) {}
  ngOnInit(): void {
    this.getAffairNoti();
  }
  close(): void {
    this.dialogRef.close();
  }

  getAffairNoti() {
    this.affair.getAffairtNoti().subscribe((data) => {
      this.notis = data;
      console.log(data);
    });
  }
}
