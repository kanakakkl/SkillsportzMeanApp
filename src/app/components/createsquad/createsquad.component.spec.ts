import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesquadComponent } from './createsquad.component';

describe('CreatesquadComponent', () => {
  let component: CreatesquadComponent;
  let fixture: ComponentFixture<CreatesquadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesquadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
