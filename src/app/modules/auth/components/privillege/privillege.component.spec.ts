import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivillegeComponent } from './privillege.component';

describe('PrivillegeComponent', () => {
  let component: PrivillegeComponent;
  let fixture: ComponentFixture<PrivillegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivillegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivillegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
