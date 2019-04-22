import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogseeIcoAnimComponent } from './logsee-ico-anim.component';

describe('LoadingIcoAnimComponent', () => {
  let component: LogseeIcoAnimComponent;
  let fixture: ComponentFixture<LogseeIcoAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogseeIcoAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogseeIcoAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
