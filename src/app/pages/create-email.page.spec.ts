import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEmailPage } from './create-email.page';

describe('CreateEmailPage', () => {
  let component: CreateEmailPage;
  let fixture: ComponentFixture<CreateEmailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
