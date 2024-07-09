import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNotiComponent } from './student-noti.component';

describe('StudentNotiComponent', () => {
  let component: StudentNotiComponent;
  let fixture: ComponentFixture<StudentNotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentNotiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
