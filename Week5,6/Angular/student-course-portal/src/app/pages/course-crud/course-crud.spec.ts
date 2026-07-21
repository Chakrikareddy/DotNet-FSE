import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCrud } from './course-crud';

describe('CourseCrud', () => {
  let component: CourseCrud;
  let fixture: ComponentFixture<CourseCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
