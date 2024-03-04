import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDtailsComponent } from './product-dtails.component';

describe('ProductDtailsComponent', () => {
  let component: ProductDtailsComponent;
  let fixture: ComponentFixture<ProductDtailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDtailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
