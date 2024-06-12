import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutbonComponent } from './ajoutbon.component';

describe('AjoutbonComponent', () => {
  let component: AjoutbonComponent;
  let fixture: ComponentFixture<AjoutbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutbonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
