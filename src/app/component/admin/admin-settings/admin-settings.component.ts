import { Component } from '@angular/core';
import { SettingsClass } from '../../../common/settings-class';
import { AdminService } from '../../../services/admin.service';
@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.scss',
})
export class AdminSettingsComponent {
  imageSrc: any = 'assets/small.jpg';
  info: any;
  studentSettings?: SettingsClass;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAdminSettings();
    this.changeAdminSettings();
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

  getAdminSettings() {
    this.adminService.getAdminSettings().subscribe((data) => {
      this.studentSettings = data;
    });
  }

  changeAdminSettings() {
    const body = {
      userName: 'ahmedaahofny',
      email: 'mohofny@gmail.com',
    };
    // this.adminService.changeAdminSettings(body).subscribe();
  }
}
