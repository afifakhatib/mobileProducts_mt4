import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileCardsComponent } from './shared/components/mobile-cards/mobile-cards.component';
import { MobileHeaderComponent } from './shared/components/mobile-header/mobile-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileCardsComponent,
    MobileHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
