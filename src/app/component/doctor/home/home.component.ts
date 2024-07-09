import { Component, Input, OnInit } from '@angular/core';
import { DoctorNotiComponent } from '../doctor-noti/doctor-noti.component';
import { MatDialog } from '@angular/material/dialog';
import { FormDataService } from '../../../services/form-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imageUrl: string;
  isUserLogin: boolean;
  userEmail: string;
  notis: any;
  constructor(private dialog: MatDialog, private formData: FormDataService) {
    this.imageUrl = 'assets/small.jpg';
    this.isUserLogin = this.formData.isUserLogin();
    this.userEmail = 'ahofny8@gmail.com';
  }
  ngOnInit(): void {
    this.isUserLogin = this.formData.isUserLogin();
  }
  logout() {
    this.formData.logout();
    this.isUserLogin = this.formData.isUserLogin();
  }

  openPopup(): void {
    this.dialog.open(DoctorNotiComponent, {
      width: '800px',
      height: '600px',
      panelClass: 'custom-dialog-container',
    });
  }
}
