import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecollComponent } from './listecoll.component';

describe('ListecollComponent', () => {
  let component: ListecollComponent;
  let fixture: ComponentFixture<ListecollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListecollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListecollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
