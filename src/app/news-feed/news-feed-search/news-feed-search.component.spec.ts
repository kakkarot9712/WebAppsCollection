import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedSearchComponent } from './news-feed-search.component';

describe('NewsFeedSearchComponent', () => {
  let component: NewsFeedSearchComponent;
  let fixture: ComponentFixture<NewsFeedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFeedSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsFeedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
