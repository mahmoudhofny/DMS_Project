import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// app.module.ts
import { AppComponent } from './app.component'; // Import your root component
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { EmpComponent } from './component/admin/emp/emp.component';
import { MyRequestsComponent } from './component/user/my-requests/my-requests.component';
import { RequestsComponent } from './component/user/requests/requests.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeAffairComponent } from './component/affair/home/home.component';
import { DocsComponent } from './component/affair/docs/docs.component';
import { RequestComponent } from './component/user/requests/request/request.component';
import { HomeComponent } from './component/user/home/home.component';
import { HomeComponent as doctorHome } from './component/doctor/home/home.component';
import { HomeComponent as adminHome } from './component/admin/home/home.component';
import { AcademicComponent } from './component/affair/academic/academic.component';
import { PopupComponent } from './component/admin/emp/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentNotiComponent } from './component/user/student-noti/student-noti.component';
import { EditRoleComponent } from './component/admin/emp/edit-role/edit-role.component';
import { DoctorNotiComponent } from './component/doctor/doctor-noti/doctor-noti.component';
import { SettingsComponent } from './component/user/settings/settings.component';
import { AffairService } from './services/affair.service';
import { DoctorServService } from './services/doctor-serv.service';
import { RegsComponent } from './component/affair/regs/regs.component';
import { ConfirmationDialogComponent } from './component/admin/emp/confirmation-dialog/confirmation-dialog.component';
import { AdminSettingsComponent } from './component/admin/admin-settings/admin-settings.component';
import { AffairNotiComponent } from './component/affair/affair-noti/affair-noti.component';
import { AcaRequestComponent } from './component/affair/academic/aca-request/aca-request.component';
import { LocalStorageService } from './services/local-storage.service';
import { MaterialComponent } from './component/doctor/material/material.component';

@NgModule({
  declarations: [
    AppComponent, // Declare your components here
    MyRequestsComponent,
    RequestsComponent,
    RequestComponent,
    SettingsComponent,
    HomeComponent,
    adminHome,
    LoginComponent,
    SignupComponent,
    EmpComponent,
    HomeAffairComponent,
    DocsComponent,
    AcademicComponent,
    RegsComponent,
    PopupComponent,
    StudentNotiComponent,
    EditRoleComponent,
    DoctorNotiComponent,
    ConfirmationDialogComponent,
    AdminSettingsComponent,
    AffairNotiComponent,
    AcaRequestComponent,
    doctorHome,
    MaterialComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, // Ensure HttpClientModule is imported here
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(), // Needed for SSR
    provideHttpClient(withFetch()),
    AffairService,
    DoctorServService,
    EmpComponent,
    LocalStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
