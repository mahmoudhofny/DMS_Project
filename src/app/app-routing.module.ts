import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AdminAuth,
  affairAuth,
  authGuardLogin,
  doctorAuth,
  userAuth,
} from './Gaurds/auth.guard';
// User
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { NotFoundedComponent } from './component/not-founded/not-founded.component';
import { HomeComponent } from './component/user/home/home.component';
import { RequestsComponent } from './component/user/requests/requests.component';
import { MyRequestsComponent } from './component/user/my-requests/my-requests.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RequestComponent } from './component/user/requests/request/request.component';
// Doctor
import { HomeComponent as DoctorHome } from './component/doctor/home/home.component';
import { MaterialComponent } from './component/doctor/material/material.component';
// admin
import { HomeComponent as adminHome } from './component/admin/home/home.component';
import { EmpComponent } from './component/admin/emp/emp.component';
import { HomeAffairComponent } from './component/affair/home/home.component';
import { AcademicComponent } from './component/affair/academic/academic.component';
import { RegsComponent } from './component/affair/regs/regs.component';
import { DocsComponent } from './component/affair/docs/docs.component';
import { SettingsComponent } from './component/user/settings/settings.component';
import { AdminSettingsComponent } from './component/admin/admin-settings/admin-settings.component';
import { AcaRequestComponent } from './component/affair/academic/aca-request/aca-request.component';
import { affairSettingsComponent } from './component/affair/settings/settings.component';
import { doctorSettingsComponent } from './component/doctor/settings/settings.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'requests', pathMatch: 'full' },
      {
        path: 'requests',
        component: RequestsComponent,
      },
      { path: 'requests/request/:name', component: RequestComponent },
      { path: 'myrequests/:type', component: MyRequestsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'profile', component: ProfileComponent },
    ],
    canActivate: [userAuth],
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Login && SignUp
  { path: 'login', component: LoginComponent, canActivate: [authGuardLogin] },
  { path: 'signup', component: SignupComponent, canActivate: [authGuardLogin] },

  // Doctor
  {
    path: 'doctor',
    component: DoctorHome,
    children: [
      { path: '', redirectTo: 'material', pathMatch: 'full' },
      {
        path: 'material',
        component: MaterialComponent,
      },
      {
        path: 'material/:type',
        component: MaterialComponent,
      },
      { path: 'settings', component: doctorSettingsComponent },
      { path: 'profile', component: ProfileComponent },
    ],
    canActivate: [doctorAuth],
  },

  // admin
  {
    path: 'admin',
    component: adminHome,
    children: [
      { path: '', redirectTo: 'employees', pathMatch: 'full' },

      { path: 'employees', component: EmpComponent },
      { path: 'settings', component: AdminSettingsComponent },
      { path: 'profile', component: ProfileComponent },
    ],
    canActivate: [AdminAuth],
  },

  // Affair
  {
    path: 'affair',
    component: HomeAffairComponent,
    children: [
      { path: '', redirectTo: 'regs/pending', pathMatch: 'full' },

      { path: 'regs', component: RegsComponent },
      { path: 'regs/:type', component: RegsComponent },
      { path: 'academic', component: AcademicComponent },
      { path: 'academic/:type', component: AcademicComponent },
      { path: 'academic/:type/:id', component: AcaRequestComponent },
      { path: 'documents', component: DocsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'Settings', component: affairSettingsComponent },
    ],
    canActivate: [affairAuth],
  },
  { path: '**', component: NotFoundedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
