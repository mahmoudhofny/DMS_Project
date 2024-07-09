import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { EmployeesClass } from '../../../common/employees-class';
import { FormDataService } from '../../../services/form-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imageUrl: string;
  isUserLogin: boolean;
  admin?: EmployeesClass;

  constructor(
    private AdminService: AdminService,
    private formData: FormDataService
  ) {
    this.imageUrl = 'assets/small.jpg';
    this.isUserLogin = this.formData.isUserLogin();
  }
  ngOnInit(): void {
    this.getAdminName();
    this.isUserLogin = this.formData.isUserLogin();
  }
  logout() {
    this.formData.logout();
    this.isUserLogin = this.formData.isUserLogin();
  }
  getAdminName() {
    this.AdminService.getEmployees().subscribe((data) => {
      const idToFind = Number(this.AdminService.getUserId());
      const foundAdmin = data.find(
        (data: { employeeId: number }) => data.employeeId === idToFind
      );
      this.admin = foundAdmin;
    });
  }
}
