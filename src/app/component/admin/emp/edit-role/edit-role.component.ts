import {
  AfterContentChecked,
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../../../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsClass } from '../../../../common/settings-class';
@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrl: './edit-role.component.scss',
})
export class EditRoleComponent implements OnInit {
  @ViewChildren('inputField') inputFields!: QueryList<ElementRef>;
  editEmp!: FormGroup;
  settingInfo?: SettingsClass;
  empId?: number;
  edit: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<EditRoleComponent>,
    private adminService: AdminService,
    private formBulider: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.getEmpSettings();
    this.editEmp = this.formBulider.group({
      userName: ['', [Validators.maxLength(20)]],
      email: ['', [Validators.email]],
      password: ['', [Validators.minLength(8), Validators.maxLength(25)]],
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  editFun() {
    if (!this.editEmp.get('userName')?.value) {
      this.editEmp.controls['userName'].setValue(this.settingInfo?.userName);
    }
    if (!this.editEmp.get('email')?.value) {
      this.editEmp.controls['email'].setValue(this.settingInfo?.email);
    }
    if (!this.editEmp.get('password')?.value) {
      this.editEmp.controls['password'].setValue(this.settingInfo?.password);
    }
    this.adminService
      .EditFun(this.data.id, this.editEmp.value)
      .subscribe(() => {
        this.edit = true;
        setTimeout(() => {
          this.close();
        }, 1000);
      });
  }

  getEmpSettings() {
    return this.adminService.getEmpSettings(this.data.id).subscribe((data) => {
      this.settingInfo = data;
    });
  }
  get userName() {
    return this.editEmp.get('userName');
  }
  get password() {
    return this.editEmp.get('password');
  }
  get email() {
    return this.editEmp.get('email');
  }
}
