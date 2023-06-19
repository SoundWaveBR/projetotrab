import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tela04Page } from './tela04.page';

describe('Tela04Page', () => {
  let component: Tela04Page;
  let fixture: ComponentFixture<Tela04Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tela04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
