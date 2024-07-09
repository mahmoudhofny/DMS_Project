import { Component, OnInit } from '@angular/core';
import { StudentNotiComponent } from '../student-noti/student-noti.component';
import { MatDialog } from '@angular/material/dialog';
import { FormDataService } from '../../../services/form-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  url: string;
  isUserLogin: boolean;
  userEmail: string;
  studentSettings: any;
  constructor(private dialog: MatDialog, private formData: FormDataService) {
    this.url = 'assets/small.jpg';
    this.isUserLogin = this.formData.isUserLogin();
    this.userEmail = 'ahofny8@gmail.com';
    this.getStudentSettings();
  }
  ngOnInit(): void {
    this.isUserLogin = this.formData.isUserLogin();
  }
  logout() {
    this.formData.logout();
    this.isUserLogin = this.formData.isUserLogin();
  }
  openPopup(): void {
    this.dialog.open(StudentNotiComponent, {
      width: '800px',
      height: '600px',
      panelClass: 'custom-dialog-container',
    });
  }
  getStudentSettings() {
    this.formData.getStudentSettings().subscribe((data) => {
      this.studentSettings = data;
    });
  }
}
