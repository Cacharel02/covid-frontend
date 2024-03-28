import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterViewComponent } from './admin-center-view.component';

describe('AdminCenterViewComponent', () => {
  let component: AdminCenterViewComponent;
  let fixture: ComponentFixture<AdminCenterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCenterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
