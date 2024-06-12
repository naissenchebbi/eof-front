import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsidenavComponent } from './csidenav.component';

describe('CsidenavComponent', () => {
  let component: CsidenavComponent;
  let fixture: ComponentFixture<CsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
