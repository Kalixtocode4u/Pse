import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistraPage } from './registra.page';

describe('RegistraPage', () => {
  let component: RegistraPage;
  let fixture: ComponentFixture<RegistraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
