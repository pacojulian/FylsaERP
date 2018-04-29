import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionNewComponent } from './cotizacion-new.component';

describe('CotizacionNewComponent', () => {
  let component: CotizacionNewComponent;
  let fixture: ComponentFixture<CotizacionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
