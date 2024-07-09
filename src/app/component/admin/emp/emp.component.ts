import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeesClass } from '../../../common/employees-class';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { AdminService } from '../../../services/admin.service';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.scss',
})
export class EmpComponent implements OnInit {
  employees: EmployeesClass[] = [];
  constructor(
    private dialog: MatDialog,
    private Route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.Route.paramMap.subscribe(() => {
      this.getEmployees();
    });
  }
  getEmployees() {
    return this.adminService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  deleteFun(id: number) {
    this.adminService.deleteFun(id).subscribe(() => {
      this.getEmployees();
    });
  }

  openPopup(): void {
    this.dialog.open(PopupComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
    });
  }

  openEditEmp(empid: number): void {
    this.dialog.open(EditRoleComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      data: {
        id: empid,
      },
    });
  }
  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: { message: 'Are you sure to Delete Employee?' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteFun(id);
      }
    });
  }
}
