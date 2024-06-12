import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollComponent } from './coll.component';

describe('CollComponent', () => {
  let component: CollComponent;
  let fixture: ComponentFixture<CollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
