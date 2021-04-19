import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifylistComponent } from './gifylist.component';

describe('GifylistComponent', () => {
  let component: GifylistComponent;
  let fixture: ComponentFixture<GifylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
