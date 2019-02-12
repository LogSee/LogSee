import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogseeIcoTextComponent } from './logsee-ico-text.component';

describe('LogseeIcoTextComponent', () => {
  let component: LogseeIcoTextComponent;
  let fixture: ComponentFixture<LogseeIcoTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogseeIcoTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogseeIcoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
