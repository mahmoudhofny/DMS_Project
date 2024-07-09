import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentClass } from '../../common/student-class';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user?: StudentClass;
  constructor(private FormDataService: FormDataService) {}
  ngOnInit(): void {
    this.getStudentData();
  }
  public getStudentData() {
    this.FormDataService.getStudentData().subscribe((data) => {
      this.user = data;
    });
  }
}
