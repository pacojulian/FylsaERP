import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatesUpdateComponent } from './associates-update.component';

describe('AssociatesUpdateComponent', () => {
  let component: AssociatesUpdateComponent;
  let fixture: ComponentFixture<AssociatesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
