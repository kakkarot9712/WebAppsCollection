import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedTopHeadlinesComponent } from './news-feed-top-headlines.component';

describe('NewsFeedTopHeadlinesComponent', () => {
  let component: NewsFeedTopHeadlinesComponent;
  let fixture: ComponentFixture<NewsFeedTopHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFeedTopHeadlinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsFeedTopHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
