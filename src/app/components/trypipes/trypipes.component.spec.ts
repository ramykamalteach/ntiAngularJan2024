import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrypipesComponent } from './trypipes.component';

describe('TrypipesComponent', () => {
  let component: TrypipesComponent;
  let fixture: ComponentFixture<TrypipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrypipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrypipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
