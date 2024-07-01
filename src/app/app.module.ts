import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CustomInterceptor } from './interceptor/custom.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withInterceptors([CustomInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
