import { SignupService } from './../../services/signup.service';
import { FormDataService } from './../../services/form-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  url1: any = '';
  imageHight1: string = '';
  url2: any = '';
  imageHight2: string = '';
  url3: any = '';
  imageHight3: string = '';
  url4: any = '';
  imageHight4: string = '';
  url5: any = '';
  imageHight5: string = '';
  url6: any = '';
  imageHight6: string = '';
  url7: any = '';
  imageHight7: string = '';
  url8: any = '';
  imageHight8: string = '';
  selectedFile: File | null = null;
  file?: File;

  // Forms
  signUpForm: FormGroup;
  idSingupForm: FormGroup;
  uploadNomForm: FormGroup;
  upload2: FormGroup;
  upload3: FormGroup;
  upload4: FormGroup;
  upload5: FormGroup;
  upload6: FormGroup;
  upload7: FormGroup;
  upload8: FormGroup;
  // Next & Prev
  numsDone: string[] = ['', '', '', '', '', '', '', ''];
  numsActive: string[] = ['true', '', '', '', '', '', '', ''];
  stageActive: string[] = [
    '',
    'true',
    'true',
    'true',
    'true',
    'true',
    'true',
    'true',
    'true',
    'true',
  ];

  stageNumber: number = 0;
  urlArray: any = ['', '', '', '', '', ''];
  passwordType: string = 'password';
  // id
  error: string | null = null;
  error1: string | null = null;
  error2: string | null = null;
  error3: string | null = null;
  error4: string | null = null;
  error5: string | null = null;
  error6: string | null = null;
  error7: string | null = null;
  error8: string | null = null;
  error9: string | null = null;
  error10: string | null = null;
  success: string | null = null;
  // info Student
  genderMale: boolean = true;
  genderFemale: boolean = false;
  constructor(
    private fb: FormBuilder,
    private SignupService: SignupService,
    private router: Router
  ) {
    this.idSingupForm = this.fb.group({
      id: [
        '',
        [
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(14),
        ],
      ],
    });
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
        ],
      ],
      phoneNumber: [''],
      dateOfBirth: [''],
      profilePicture: [''],
      isMale: [true],
    });
    this.uploadNomForm = this.fb.group({
      file: '',
      step: '3',
    });
    this.upload2 = this.fb.group({
      file: '',
      step: '4',
    });
    this.upload3 = this.fb.group({
      file: '',
      step: '5',
    });
    this.upload4 = this.fb.group({
      file: '',
      step: '6',
    });
    this.upload5 = this.fb.group({
      file: '',
      step: '7',
    });
    this.upload6 = this.fb.group({
      file: '',
      step: '8',
    });
    this.upload7 = this.fb.group({
      file: '',
      step: '9',
    });
    this.upload8 = this.fb.group({
      file: '',
      step: '10',
    });
  }
  ngOnInit(): void {}

  signupSwitch() {
    return this.stageNumber;
  }
  get id() {
    return this.idSingupForm.get('id');
  }
  // INFO PAGE

  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get userName() {
    return this.signUpForm.get('userName');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  showPass() {
    if (this.passwordType == 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
  get phoneNumber() {
    return this.signUpForm.get('phoneNumber');
  }
  get date() {
    return this.signUpForm.get('date');
  }
  get isMale() {
    return this.signUpForm.get('isMale');
  }

  sendIdSignup() {
    this.error = null;
    this.success = null;
    if (this.idSingupForm.valid) {
      const nationalId = this.idSingupForm.value.id;
      this.SignupService.sendIdSignup(nationalId).subscribe(
        (response) => {
          console.log('Success!', response);
        },
        (error: HttpErrorResponse) => {
          this.error1 = error.error;
          console.log(this.error);
        }
      );
    } else {
      this.error = 'National ID is required!';
    }
  }
  idNext() {
    this.sendIdSignup();
    setTimeout(() => {
      if (this.error !== 'National ID not found') {
        this.stageNumber = 1;
        this.numsDone[0] = 'done';
        this.numsActive[1] = 'done';
        this.stageActive[0] = 'true';
        this.stageActive[1] = '';
      }
    }, 1500);
  }
  //
  //
  sendInfoSignup() {
    if (this.idSingupForm.valid) {
      const studenInfo = this.signUpForm.value;
      this.SignupService.sendInfoSignup(studenInfo).subscribe(
        (respone) => {
          console.log(respone.message);
        },
        (error: HttpErrorResponse) => {
          this.error2 = error.error;
          console.log(this.error2);
          console.log(error.error.description);
        }
      );
    } else {
    }
  }
  infoNext() {
    this.sendInfoSignup();
    setTimeout(() => {
      if (this.error !== 'National ID not found') {
        this.stageNumber = 2;
        this.numsDone[1] = 'done';
        this.numsActive[2] = 'done';
        this.stageActive[1] = 'true';
        this.stageActive[2] = '';
      }
    }, 2000);
  }

  //  upload documents

  // upload nom
  onFileChange(event: any) {
    this.file = event.target.files[0]; // upload image
    // previwe image
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url1 = event.target?.result;
        this.imageHight1 = '0';
      };
    }
  }
  uploadDoc() {
    const step = this.uploadNomForm.value.step;
    if (step && this.file) {
      this.SignupService.uploadDocument(step, this.file).subscribe(
        (response) => {
          console.log('Success!', response);
        }
      );
    } else {
      console.error('All fields are required!');
    }
  }
  uploadDocument() {
    this.uploadDoc();
    setTimeout(() => {
      if (true) {
        this.stageNumber = 3;
        this.numsDone[2] = 'done';
        this.numsActive[3] = 'done';
        this.stageActive[2] = 'true';
        this.stageActive[3] = '';
      }
    }, 2000);
  }

  // id
  onFileChange2(event: any) {
    this.file = event.target.files[0]; // upload image
    // previwe image
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url2 = event.target?.result;
        this.imageHight2 = '200';
      };
    }
  }
  uploadDoc2() {
    const step = this.upload2.value.step;
    if (step && this.file) {
      this.SignupService.uploadDocument(step, this.file).subscribe(
        (response) => {
          console.log('Success!', response);
        }
      );
    } else {
      console.error('All fields are required!');
    }
  }
  uploadDocument2() {
    this.uploadDoc2();
    setTimeout(() => {
      if (true) {
        this.stageNumber = 4;
        this.numsDone[3] = 'done';
        this.numsActive[4] = 'done';
        this.stageActive[3] = 'true';
        this.stageActive[4] = '';
      }
    }, 2000);
  }

  //  id back
  onFileChange3(event: any) {
    this.file = event.target.files[0]; // upload image
    // previwe image
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url2 = event.target?.result;
        this.imageHight2 = '200';
      };
    }
  }
  uploadDoc3() {
    const step = this.upload3.value.step;
    if (step && this.file) {
      this.SignupService.uploadDocument(step, this.file).subscribe(
        (response) => {
          console.log('Success!', response);
        }
      );
    } else {
      console.error('All fields are required!');
    }
  }
  uploadDocument3() {
    this.uploadDoc3();
    setTimeout(() => {
      if (true) {
        this.stageNumber = 5;
        this.numsDone[4] = 'done';
        this.numsActive[5] = 'done';
        this.stageActive[4] = 'true';
        this.stageActive[5] = '';
      }
    }, 2000);
  }

  //  4 birth
  onFileChange4(event: any) {
    this.file = event.target.files[0]; // upload image
    // previwe image
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        this.url2 = event.target?.result;
        this.imageHight2 = '200';
      };
    }
  }
  uploadDoc4() {
    const step = this.upload4.value.step;
    if (step && this.file) {
      this.SignupService.uploadDocument(step, this.file).subscribe(
        (response) => {
          console.log('Success!', response);
        }
      );
    } else {
      console.error('All fields are required!');
    }
  }
  uploadDocument4() {
    this.uploadDoc4();
    setTimeout(() => {
      if (true) {
        this.stageNumber = 6;
        this.numsDone[5] = 'done';
        this.numsActive[6] = 'done';
        this.stageActive[5] = 'true';
        this.stageActive[6] = '';
      }
    }, 2000);
  }
  //  5 Sec
  onFileChange5(event: any) {
    this.file = event.target.files[0]; // upload image
    // previwe image
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url2 = event.target?.result;
        this.imageHight2 = '200';
      };
    }
  }
  uploadDoc5() {
    const step = this.upload5.value.step;
    if (step && this.file) {
      this.SignupService.uploadDocument(step, this.file).subscribe(
        (response) => {
          console.log('Success!', response);
        }
      );
    } else {
      console.error('All fields are required!');
    }
  }
  uploadDocument5() {
    this.uploadDoc5();
    setTimeout(() => {
      if (true) {
        this.stageNumber = 7;
        this.numsDone[6] = 'done';
        this.numsActive[7] = 'done';
        this.stageActive[6] = 'true';
        this.stageActive[7] = '';
      }
    }, 2000);
  }
  //  upload Pic
  onFileChange6(event: any) {
    this.file = event.target.files[0]; // upload image
    // previwe image
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url2 = event.target?.result;
        this.imageHight2 = '200';
      };
    }
  }
  uploadDoc6() {
    const step = this.upload6.value.step;
    if (step && this.file) {
      this.SignupService.uploadDocument(step, this.file).subscribe(
        (response) => {
          console.log('Success!', response);
        }
      );
    } else {
      console.error('All fields are required!');
    }
  }
  uploadDocument6() {
    this.uploadDoc6();
    setTimeout(() => {
      if (true) {
        this.stageNumber = 8;
        this.numsDone[7] = 'done';
        this.numsActive[8] = 'done';
        this.stageActive[7] = 'true';
        this.stageActive[8] = '';
      }
    }, 2000);
  }
  //  upload Guards
  onFileChange7(event: any) {
    this.file = event.target.files[0]; // upload image
    // previwe image
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url2 = event.target?.result;
        this.imageHight2 = '200';
      };
    }
  }
  uploadDoc7() {
    const step = this.upload7.value.step;
    if (step && this.file) {
      this.SignupService.uploadDocument(step, this.file).subscribe(
        (response) => {
          console.log('Success!', response);
        }
      );
    } else {
      console.error('All fields are required!');
    }
  }
  uploadDocument7() {
    this.uploadDoc7();
    setTimeout(() => {
      if (true) {
        this.stageNumber = 9;
        this.numsDone[8] = 'done';
        this.numsActive[9] = 'done';
        this.stageActive[8] = 'true';
        this.stageActive[9] = '';
      }
    }, 2000);
  }
  //  upload Gurds Back
  onFileChange8(event: any) {
    this.file = event.target.files[0]; // upload image
    // previwe image
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url2 = event.target?.result;
        this.imageHight2 = '200';
      };
    }
  }
  uploadDoc8() {
    const step = this.upload8.value.step;
    if (step && this.file) {
      this.SignupService.submitDocument().subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.error('All fields are required!');
    }
  }
  uploadDocument8() {
    this.uploadDoc8();
    setTimeout(() => {
      if (true) {
        this.numsDone[9] = 'done';
        this.router.navigateByUrl('/login');
      }
    }, 2000);
  }
  //  upload documents
}
