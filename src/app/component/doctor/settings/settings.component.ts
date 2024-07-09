import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsClass } from '../../../common/settings-class';
import { FormDataService } from '../../../services/form-data.service';
import { AffairService } from '../../../services/affair.service';

@Component({
  selector: 'app-affair-settings',
  providers: [],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class doctorSettingsComponent {
  imageSrc: any = 'assets/small.jpg';
  info: any;
  studentSettings?: SettingsClass;
  constructor(
    private FormDataService: FormDataService,
    private affair: AffairService
  ) {}

  ngOnInit(): void {
    this.getStudentSettings();
  }

  onSelectFile(event: any | null) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.imageSrc = event.target?.result;
      };
    }
  }

  getStudentSettings() {
    this.affair.getAffairSettings().subscribe((data) => {
      this.studentSettings = data;
      // console.log(data);
    });
  }
}
