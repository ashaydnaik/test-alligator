import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-test-sample",
  templateUrl: "./test-sample.component.html",
  styleUrls: ["./test-sample.component.css"]
})
export class TestSampleComponent {
  value = 0;
  message: string;

  increment() {
    if (this.value < 15) {
      this.value += 1;
      this.message = "";
    } else {
      this.message = "Maximum reached!";
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.message = "";
    } else {
      this.message = "Minimum reached!";
    }
  }

}
