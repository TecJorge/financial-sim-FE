import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { RadioComponent } from './radio/radio.component';
import { TextboxComponent } from './textbox/textbox.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderDataService } from './slider-data.service';
import { CarInfoComponent } from './carinfo/carinfo.component';
import { ApiService } from './financial-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    RadioComponent,
    TextboxComponent,
    CarInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SliderDataService ,ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
