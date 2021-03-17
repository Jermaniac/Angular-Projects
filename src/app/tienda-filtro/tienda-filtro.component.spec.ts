import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaFiltroComponent } from './tienda-filtro.component';

describe('TiendaFiltroComponent', () => {
  let component: TiendaFiltroComponent;
  let fixture: ComponentFixture<TiendaFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
