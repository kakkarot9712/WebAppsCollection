import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallClockComponent } from './wall-clock.component';

describe('WallClockComponent', () => {
  let component: WallClockComponent;
  let fixture: ComponentFixture<WallClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
