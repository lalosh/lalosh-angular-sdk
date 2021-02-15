import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSdkComponent } from './angular-sdk.component';

describe('AngularSdkComponent', () => {
  let component: AngularSdkComponent;
  let fixture: ComponentFixture<AngularSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
