import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageSearchComponent } from './image-search/image-search.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSearchComponent,
    IntroSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
