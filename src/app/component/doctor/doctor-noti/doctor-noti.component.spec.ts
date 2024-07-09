import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNotiComponent } from './doctor-noti.component';

describe('DoctorNotiComponent', () => {
  let component: DoctorNotiComponent;
  let fixture: ComponentFixture<DoctorNotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorNotiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
