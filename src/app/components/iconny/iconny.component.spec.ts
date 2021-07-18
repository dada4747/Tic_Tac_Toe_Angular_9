import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconnyComponent } from './iconny.component';

describe('IconnyComponent', () => {
  let component: IconnyComponent;
  let fixture: ComponentFixture<IconnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
