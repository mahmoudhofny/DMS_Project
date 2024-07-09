import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffairNotiComponent } from './affair-noti.component';

describe('AffairNotiComponent', () => {
  let component: AffairNotiComponent;
  let fixture: ComponentFixture<AffairNotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffairNotiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffairNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
