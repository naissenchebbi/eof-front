import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilmComponent } from './acceuilm.component';

describe('AcceuilmComponent', () => {
  let component: AcceuilmComponent;
  let fixture: ComponentFixture<AcceuilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceuilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceuilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
