import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockThreeComponent } from './block-three.component';

describe('BlockThreeComponent', () => {
  let component: BlockThreeComponent;
  let fixture: ComponentFixture<BlockThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockThreeComponent]
    });
    fixture = TestBed.createComponent(BlockThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
