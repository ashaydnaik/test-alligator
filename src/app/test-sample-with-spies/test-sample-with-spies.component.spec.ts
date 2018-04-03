import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {TestSampleWithSpiesComponent} from "./test-sample-with-spies.component";
import {DebugElement} from "@angular/core";
import {IncrementDecrementService} from "../services/increment-decrement.service";
import {By} from "@angular/platform-browser";

describe("TestSampleWithSpiesComponent", () => {
  let fixture: ComponentFixture<TestSampleWithSpiesComponent>;
  let debugElement: DebugElement;
  let incrementDecrementService: IncrementDecrementService;
  let incrementSpy;
  let minimumOrMaximumSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestSampleWithSpiesComponent],
      providers: [IncrementDecrementService]
    }).compileComponents();

    fixture = TestBed.createComponent(TestSampleWithSpiesComponent);
    debugElement = fixture.debugElement;

    incrementDecrementService = debugElement.injector.get(IncrementDecrementService);
    incrementSpy = spyOn(incrementDecrementService, "increment").and.callThrough();
    minimumOrMaximumSpy =
      spyOn(incrementDecrementService, "minimumOrMaximumReached").and.returnValue(true);
  }));

  it("should increment in template", () => {
    debugElement.query(By.css("button.increment"))
      .triggerEventHandler("click", null);
    fixture.detectChanges();
    const value = debugElement.query(By.css("h1")).nativeElement.innerText;
    expect(value).toEqual("1");
  });

  it("should stop at 15 and show maximum message", () => {
    incrementDecrementService.value = 15;
    debugElement.query(By.css("button.increment"))
      .triggerEventHandler("click", null);
    fixture.detectChanges();
    const message = debugElement.query(By.css("p.message")).nativeElement.innerText;
    expect(message).toContain("Maximum");
  });

  it("should call increment on the service", () => {
    debugElement.query(By.css("button.increment"))
      .triggerEventHandler("click", null);

    expect(incrementDecrementService.value).toBe(1);
    expect(incrementSpy).toHaveBeenCalled();
  });

  it("should show 'Limit reached' message", () => {
    fixture.detectChanges();
    const message = debugElement.query(By.css('p.limitReachedMessage')).nativeElement.innerText;
    expect(message).toEqual('Limit reached!');
  });
});
