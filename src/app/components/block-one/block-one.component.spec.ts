import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockOneComponent } from './block-one.component';

describe('BlockOneComponent', () => {
  let component: BlockOneComponent;
  let fixture: ComponentFixture<BlockOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockOneComponent]
    });
    fixture = TestBed.createComponent(BlockOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
