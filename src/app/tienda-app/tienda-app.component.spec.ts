import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaAppComponent } from './tienda-app.component';

describe('TiendaAppComponent', () => {
  let component: TiendaAppComponent;
  let fixture: ComponentFixture<TiendaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
