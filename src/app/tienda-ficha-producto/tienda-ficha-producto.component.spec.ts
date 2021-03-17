import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaFichaProductoComponent } from './tienda-ficha-producto.component';

describe('TiendaFichaProductoComponent', () => {
  let component: TiendaFichaProductoComponent;
  let fixture: ComponentFixture<TiendaFichaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaFichaProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaFichaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
