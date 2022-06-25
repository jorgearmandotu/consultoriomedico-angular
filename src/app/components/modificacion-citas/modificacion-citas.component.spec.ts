import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionCitasComponent } from './modificacion-citas.component';

describe('ModificacionCitasComponent', () => {
  let component: ModificacionCitasComponent;
  let fixture: ComponentFixture<ModificacionCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
