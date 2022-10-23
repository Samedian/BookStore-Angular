import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavBookComponent } from './add-fav-book.component';

describe('AddFavBookComponent', () => {
  let component: AddFavBookComponent;
  let fixture: ComponentFixture<AddFavBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFavBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
