import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCamionesComponent } from './listado-camiones.component';

describe('ListadoCamionesComponent', () => {
  let component: ListadoCamionesComponent;
  let fixture: ComponentFixture<ListadoCamionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCamionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCamionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
