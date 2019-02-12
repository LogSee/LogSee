import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogseeIcoFullComponent } from './logsee-ico-full.component';

describe('LogseeIcoFullComponent', () => {
  let component: LogseeIcoFullComponent;
  let fixture: ComponentFixture<LogseeIcoFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogseeIcoFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogseeIcoFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
