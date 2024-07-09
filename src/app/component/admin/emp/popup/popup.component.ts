import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../../../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent implements OnInit {
  @ViewChildren('inputField') inputFields!: QueryList<ElementRef>;
  addEmployee!: FormGroup;
  added: boolean = false;
  formError: any;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    private adminService: AdminService,
    private formBulider: FormBuilder
  ) {}
  ngOnInit(): void {
    this.addEmployee = this.formBulider.group({
      nationalId: ['', [Validators.required]],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      userName: ['', [Validators.minLength(6), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
        ],
      ],
      phoneNumber: ['', Validators.minLength(10)],
      dateOfBirth: [''],
      role: [''],
    });
  }

  close(): void {
    this.dialogRef.close();
  }
  onSubmit() {
    console.log(this.addEmployee.value);
  }
  postFun() {
    this.adminService.postFun(this.addEmployee.value).subscribe(
      () => {
        this.added = true;
        setTimeout(() => {
          this.close();
          window.location.reload();
        }, 2000);
      },
      (error) => {
        // this.formError = error.error[0];
        console.log(error);
        console.log(error.error);
        if (typeof error.error == 'string') {
          this.formError = error.error;
        } else {
          this.formError = error.error[0].description;
        }
      }
    );
  }

  get firstName() {
    return this.addEmployee.get('firstName');
  }
  get lastName() {
    return this.addEmployee.get('lastName');
  }
  get userName() {
    return this.addEmployee.get('userName');
  }
  get password() {
    return this.addEmployee.get('password');
  }
  get email() {
    return this.addEmployee.get('email');
  }
  get phoneNumber() {
    return this.addEmployee.get('phoneNumber');
  }
  get dateOfBirth() {
    return this.addEmployee.get('dateOfBirth');
  }
}
