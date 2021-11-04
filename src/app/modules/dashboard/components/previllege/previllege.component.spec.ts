import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevillegeComponent } from './previllege.component';

describe('PrevillegeComponent', () => {
  let component: PrevillegeComponent;
  let fixture: ComponentFixture<PrevillegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevillegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevillegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
