import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationPersonnelComponent } from './modification-personnel.component';

describe('ModificationPersonnelComponent', () => {
  let component: ModificationPersonnelComponent;
  let fixture: ComponentFixture<ModificationPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificationPersonnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificationPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
