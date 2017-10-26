import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ToursComponent } from './tours/tours.component';
import { BenefitComponent } from './benefit/benefit.component';
import { ReviewComponent } from './review/review.component';
import { FindTourComponent } from './find-tour/find-tour.component';
import { AchevementComponent } from './achevement/achevement.component';
import { FindFlyComponent } from './find-fly/find-fly.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ToursComponent,
    BenefitComponent,
    ReviewComponent,
    FindTourComponent,
    AchevementComponent,
    FindFlyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
