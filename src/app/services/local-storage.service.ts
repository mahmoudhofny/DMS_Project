import { Injectable, InjectionToken, inject } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<Storage | null>(
  'localStorage',
  {
    providedIn: 'root',
    factory: () => (typeof localStorage !== 'undefined' ? localStorage : null),
  }
);

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorage = inject(LOCAL_STORAGE);

  getItem(key: string): string | null {
    return this.localStorage?.getItem(key) || null;
  }

  setItem(key: string, value: string): void {
    this.localStorage?.setItem(key, value);
  }

  removeItem(key: string): void {
    this.localStorage?.removeItem(key);
  }
}
