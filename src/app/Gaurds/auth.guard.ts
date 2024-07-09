import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FormDataService } from '../services/form-data.service';

export const userAuth: CanActivateFn = (route, state) => {
  let token: any = inject(FormDataService).getToken();
  let decode: any = inject(FormDataService).decodeToken(token);
  if (inject(FormDataService).isUserLogin() && decode.role == 'Student') {
    return true;
  } else {
    inject(Router).navigate(['/doctor']);
    return false;
  }
};
export const doctorAuth: CanActivateFn = (route, state) => {
  let token: any = inject(FormDataService).getToken();
  let decode: any = inject(FormDataService).decodeToken(token);
  if (
    inject(FormDataService).isUserLogin() &&
    decode.role == 'Academic Supervisor'
  ) {
    return true;
  } else {
    inject(Router).navigate(['/affair']);
    return false;
  }
};
export const affairAuth: CanActivateFn = (route, state) => {
  let token: any = inject(FormDataService).getToken();
  let decode: any = inject(FormDataService).decodeToken(token);
  if (
    inject(FormDataService).isUserLogin() &&
    decode.role == 'Affairs Officer'
  ) {
    return true;
  } else {
    inject(Router).navigate(['/admin']);
    return false;
  }
};
export const AdminAuth: CanActivateFn = (route, state) => {
  let token: any = inject(FormDataService).getToken();
  let decode: any = inject(FormDataService).decodeToken(token);

  if (inject(FormDataService).isUserLogin() && decode.role == 'Admin') {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};
export const authGuardLogin: CanActivateFn = (route, state) => {
  if (inject(FormDataService).isUserLogin()) {
    inject(Router).navigate(['/home']);
    return false;
  } else {
    return true;
  }
};
