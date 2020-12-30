import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionSelectDialogComponent } from './region-select-dialog.component';

describe('RegionSelectDialogComponent', () => {
  let component: RegionSelectDialogComponent;
  let fixture: ComponentFixture<RegionSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionSelectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
