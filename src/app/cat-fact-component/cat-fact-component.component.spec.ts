import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactComponentComponent } from './cat-fact-component.component';

describe('CatFactComponentComponent', () => {
  let component: CatFactComponentComponent;
  let fixture: ComponentFixture<CatFactComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatFactComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatFactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
