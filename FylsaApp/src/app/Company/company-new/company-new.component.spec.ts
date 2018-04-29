import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNewComponent } from './company-new.component';

describe('CompanyNewComponent', () => {
  let component: CompanyNewComponent;
  let fixture: ComponentFixture<CompanyNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
