import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentNotiClass } from '../../../common/student-class';
import { DoctorServService } from '../../../services/doctor-serv.service';
@Component({
  selector: 'app-doctor-noti',
  templateUrl: './doctor-noti.component.html',
  styleUrl: './doctor-noti.component.scss',
})
export class DoctorNotiComponent implements OnInit {
  notis: StudentNotiClass[] = [];

  constructor(
    public dialogRef: MatDialogRef<DoctorNotiComponent>,
    private doctorServ: DoctorServService
  ) {}
  ngOnInit(): void {
    this.getDoctortNoti();
  }
  close(): void {
    this.dialogRef.close();
  }
  getDoctortNoti() {
    return this.doctorServ.getDoctortNoti().subscribe((data) => {
      this.notis = data;
    });
  }
}
