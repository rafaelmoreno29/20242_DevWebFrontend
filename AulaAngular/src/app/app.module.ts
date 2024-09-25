import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ExemploDiretivasComponent } from './exemplo-diretivas/exemplo-diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureComponent,
    AboutComponent,
    NotFoundComponent,
    ExemploDiretivasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
