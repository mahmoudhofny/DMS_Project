import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../../../../Model/request';
import { StaticRequestsService } from '../../../../services/static-requests.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormDataService } from '../../../../services/form-data.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss',
})
export class RequestComponent implements OnInit {
  url: any = '';
  imageHight: number = 0;
  selectedFile: File | null = null;
  //
  currReqId: number = 0;
  req: Request | undefined;
  allReq: Request[] | undefined;
  //
  route: string | null = '';
  material: boolean = false;
  //
  supers: any;
  uploadRequest!: FormGroup;
  formData = new FormData();
  //
  description?: string | null = '';
  id: number | null = 0;
  studentId?: string = '';
  studentDocument?: File;
  super?: string;

  constructor(
    private acv: ActivatedRoute,
    private requestsPage: StaticRequestsService,
    private fb: FormBuilder,
    private formDataServ: FormDataService
  ) {}
  ngOnInit(): void {
    // Get Student Id
    this.id = this.formDataServ.getUserId();
    this.studentId = this.id?.toString();
    this.route = this.acv.snapshot.paramMap.get('type');
    if (this.route == 'material') {
      this.material = true;
    }
    this.GetAllSupervisors();
    this.uploadRequest = this.fb.group({
      description: '',
      super: '',
    });
    //
    this.currReqId = Number(this.acv.snapshot.paramMap.get('name'));
    this.req = this.requestsPage.getRequestById(this.currReqId);
    this.allReq = this.requestsPage.getAllReqests();

    this.route = this.acv.snapshot.paramMap.get('name');
  }
  onFileChange(event: any) {
    this.studentDocument = event.target.files[0]; // upload image
    // previwe image
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target?.result;
        this.imageHight = 200;
      };
    }
  }

  //
  GetAllSupervisors() {
    this.formDataServ.GetAllSupervisors().subscribe((data) => {
      this.supers = data;
    });
  }
  get password() {
    return this.uploadRequest.get('password');
  }
  get rememberMe() {
    return this.uploadRequest.get('rememberMe');
  }
  postRequest() {
    this.super = this.uploadRequest.get('super')?.value;
    console.log(this.super);
    this.description = this.uploadRequest.value.description;
    if (this.description && this.studentId && this.studentDocument) {
      this.formDataServ
        .requestPayment(
          this.route,
          this.description,
          this.studentId,
          this.studentDocument,
          this.super
        )
        .subscribe((error) => {
          console.log('Success!', error);
        });
    } else {
      console.error('All fields are required!');
    }
  }
}
