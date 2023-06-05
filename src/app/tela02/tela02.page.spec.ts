import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tela02Page } from './tela02.page';

describe('Tela02Page', () => {
  let component: Tela02Page;
  let fixture: ComponentFixture<Tela02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tela02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
