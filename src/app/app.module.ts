import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestSampleComponent } from './test-sample/test-sample.component';
import { TestSampleWithSpiesComponent } from './test-sample-with-spies/test-sample-with-spies.component';
import {IncrementDecrementService} from "./services/increment-decrement.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TestSampleComponent,
    TestSampleWithSpiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [IncrementDecrementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
