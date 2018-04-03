import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestSampleComponent } from './test-sample.component';
import {debug} from "util";

describe('TestSampleComponent', () => {
  let fixture: ComponentFixture<TestSampleComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestSampleComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TestSampleComponent);
    debugElement = fixture.debugElement;
  }));

  it('should increment/decrement value', () => {
    fixture.componentInstance.increment();
    expect(fixture.componentInstance.value).toEqual(1);
    fixture.componentInstance.decrement();
    expect(fixture.componentInstance.value).toEqual(0);
  });

  it('should increment in template', () => {
    debugElement.query(By.css('button.increment'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    const value = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('1');
  });

  it('should stop at zero and show minimum message', () => {
    debugElement.query(By.css('button.decrement'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;
    expect(fixture.componentInstance.value).toEqual(0);
    expect(message).toContain('Minimum');
  });

  it('should stop at 15 and show maximum message', () => {
    fixture.componentInstance.value = 15;
    debugElement.query(By.css('button.increment'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;
    expect(message).toContain('Maximum');
  });

});

/*

  let component: TestSampleComponent;
  let fixture: ComponentFixture<TestSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 */
