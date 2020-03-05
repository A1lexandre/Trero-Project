import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracurricularActivityComponent } from './extracurricular-activity.component';

describe('ExtracurricularActivityComponent', () => {
  let component: ExtracurricularActivityComponent;
  let fixture: ComponentFixture<ExtracurricularActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtracurricularActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtracurricularActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
