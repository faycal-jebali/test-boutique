import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingBookComponent } from './listing-book.component';

describe('ListingBookComponent', () => {
  let component: ListingBookComponent;
  let fixture: ComponentFixture<ListingBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
