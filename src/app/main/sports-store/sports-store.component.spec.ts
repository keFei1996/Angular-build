import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsStoreComponent } from './sports-store.component';

describe('SportsStoreComponent', () => {
  let component: SportsStoreComponent;
  let fixture: ComponentFixture<SportsStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
