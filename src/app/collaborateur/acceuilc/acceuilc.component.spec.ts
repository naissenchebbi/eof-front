import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilcComponent } from './acceuilc.component';

describe('AcceuilcComponent', () => {
  let component: AcceuilcComponent;
  let fixture: ComponentFixture<AcceuilcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceuilcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceuilcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
