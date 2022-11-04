import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayernameformComponent } from './playernameform.component';

describe('PlayernameformComponent', () => {
  let component: PlayernameformComponent;
  let fixture: ComponentFixture<PlayernameformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayernameformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayernameformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
