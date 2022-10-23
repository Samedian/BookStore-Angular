import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponentComponent } from './book-component.component';

describe('BookComponentComponent', () => {
  let component: BookComponentComponent;
  let fixture: ComponentFixture<BookComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
