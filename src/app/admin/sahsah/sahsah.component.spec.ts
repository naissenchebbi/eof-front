import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahsahComponent } from './sahsah.component';

describe('SahsahComponent', () => {
  let component: SahsahComponent;
  let fixture: ComponentFixture<SahsahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SahsahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SahsahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
