import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlockOneComponent } from './components/block-one/block-one.component';
import { BlockTwoComponent } from './components/block-two/block-two.component';
import { BlockThreeComponent } from './components/block-three/block-three.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    BlockOneComponent,
    BlockTwoComponent,
    BlockThreeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
