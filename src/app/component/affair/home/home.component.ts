import { Component, OnInit } from '@angular/core';
import { AffairNotiComponent } from '../affair-noti/affair-noti.component';
import { MatDialog } from '@angular/material/dialog';
import { FormDataService } from '../../../services/form-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeAffairComponent implements OnInit {
  url: string;
  isUserLogin: boolean;
  constructor(private dialog: MatDialog, private formData: FormDataService) {
    this.url = 'assets/small.jpg';
    this.isUserLogin = this.formData.isUserLogin();
  }
  ngOnInit(): void {
    this.isUserLogin = this.formData.isUserLogin();
  }
  logout() {
    this.formData.logout();
    this.isUserLogin = this.formData.isUserLogin();
  }
  openPopup(): void {
    this.dialog.open(AffairNotiComponent, {
      width: '800px',
      height: '600px',
      panelClass: 'custom-dialog-container',
    });
  }
}
