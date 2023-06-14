import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarCorreoComponent } from './verificar-correo.component';

describe('VerificarCorreoComponent', () => {
  let component: VerificarCorreoComponent;
  let fixture: ComponentFixture<VerificarCorreoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificarCorreoComponent]
    });
    fixture = TestBed.createComponent(VerificarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
