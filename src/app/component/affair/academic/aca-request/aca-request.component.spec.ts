import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaRequestComponent } from './aca-request.component';

describe('AcaRequestComponent', () => {
  let component: AcaRequestComponent;
  let fixture: ComponentFixture<AcaRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcaRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcaRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
