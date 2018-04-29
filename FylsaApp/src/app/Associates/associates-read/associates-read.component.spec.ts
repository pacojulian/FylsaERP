import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatesReadComponent } from './associates-read.component';

describe('AssociatesReadComponent', () => {
  let component: AssociatesReadComponent;
  let fixture: ComponentFixture<AssociatesReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatesReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
