import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatesNewComponent } from './associates-new.component';

describe('AssociatesNewComponent', () => {
  let component: AssociatesNewComponent;
  let fixture: ComponentFixture<AssociatesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
