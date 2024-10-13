import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadHistoryListComponent } from './thread-history-list.component';

describe('ThreadHistoryListComponent', () => {
  let component: ThreadHistoryListComponent;
  let fixture: ComponentFixture<ThreadHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreadHistoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
