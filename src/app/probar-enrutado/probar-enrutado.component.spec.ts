import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbarEnrutadoComponent } from './probar-enrutado.component';

describe('ProbarEnrutadoComponent', () => {
  let component: ProbarEnrutadoComponent;
  let fixture: ComponentFixture<ProbarEnrutadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbarEnrutadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbarEnrutadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
