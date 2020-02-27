import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizToobarComponent } from './quiz-toobar.component';

describe('QuizToobarComponent', () => {
  let component: QuizToobarComponent;
  let fixture: ComponentFixture<QuizToobarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizToobarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizToobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
