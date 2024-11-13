import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoguePage } from './logue.page';

describe('LoguePage', () => {
  let component: LoguePage;
  let fixture: ComponentFixture<LoguePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
