import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isUserLogin: boolean = false;
  loginForm!: FormGroup;
  emailText: string = '';
  token: string = '';
  decodedToken?: any;
  passwordType: string = 'password';
  checkboxValue: boolean = false;
  formError: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formData: FormDataService
  ) {}

  ngOnInit(): void {
    this.creatForm();
    this.isUserLogin = this.formData.isUserLogin();
  }

  creatForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
        ],
      ],
      rememberMe: [this.checkboxValue],
    });
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get rememberMe() {
    return this.loginForm.get('rememberMe');
  }
  checkboxRemember() {
    this.checkboxValue = true;
  }
  showPass() {
    if (this.passwordType == 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  login() {
    this.formData.login(this.loginForm.value).subscribe(
      (response) => {
        this.token = response.token;
        this.decodedToken = this.formData.decodeToken(this.token);
        localStorage.setItem('token', this.token); // Store token
        const userId = this.formData.getUserId();
        const role = this.decodedToken.role;
        if (userId) {
          console.log('User ID:', userId);
        }
        if (role == 'Admin') {
          this.router.navigateByUrl('/admin');
        } else if (role == 'Student') {
          this.router.navigateByUrl('/home');
        } else if (role == 'Academic Supervisor') {
          this.router.navigateByUrl('/doctor');
        } else if (role == 'Affairs Officer') {
          this.router.navigateByUrl('/affair');
        }
      },
      (error) => {
        this.formError = error.error;
      }
    );
  }
}
export class LoginClass {
  constructor(public email: string, public password: string) {}
}
