import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsComponent } from './regs.component';

describe('RegsComponent', () => {
  let component: RegsComponent;
  let fixture: ComponentFixture<RegsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
