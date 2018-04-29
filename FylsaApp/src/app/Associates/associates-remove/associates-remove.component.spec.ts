import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatesRemoveComponent } from './associates-remove.component';

describe('AssociatesRemoveComponent', () => {
  let component: AssociatesRemoveComponent;
  let fixture: ComponentFixture<AssociatesRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatesRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatesRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
