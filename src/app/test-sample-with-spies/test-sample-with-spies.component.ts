import {Component, OnInit} from "@angular/core";
import {IncrementDecrementService} from "../services/increment-decrement.service";

@Component({
  selector: "app-test-sample-with-spies",
  templateUrl: "./test-sample-with-spies.component.html",
  styleUrls: ["./test-sample-with-spies.component.css"]
})
export class TestSampleWithSpiesComponent {

  constructor(public incrementDecrement: IncrementDecrementService) {
  }

  increment() {
    this.incrementDecrement.increment();
  }

  decrement() {
    this.incrementDecrement.decrement();
  }

  limitReached() {
    return this.incrementDecrement.minimumOrMaximumReached();
  }
}
