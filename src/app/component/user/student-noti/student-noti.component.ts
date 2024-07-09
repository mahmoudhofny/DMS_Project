import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentNotiClass } from '../../../common/student-class';
import { FormDataService } from '../../../services/form-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-noti',
  templateUrl: './student-noti.component.html',
  styleUrl: './student-noti.component.scss',
})
export class StudentNotiComponent implements OnInit {
  notis: StudentNotiClass[] = [];
  constructor(
    public dialogRef: MatDialogRef<StudentNotiComponent>,
    private FormDataService: FormDataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getStudentNoti();
    });
  }
  close(): void {
    this.dialogRef.close();
  }

  getStudentNoti() {
    this.FormDataService.getStudentNoti().subscribe((data) => {
      this.notis = data;
    });
  }
}
