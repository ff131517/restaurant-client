import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListComponent } from './food-list.component';

describe('FoodComponent', () => {
  let component: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;

  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      declarations: [ FoodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});