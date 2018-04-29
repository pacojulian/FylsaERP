import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReadComponent } from './company-read.component';

describe('CompanyReadComponent', () => {
  let component: CompanyReadComponent;
  let fixture: ComponentFixture<CompanyReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
