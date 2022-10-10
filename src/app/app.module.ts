import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ErrorPopupComponent } from './components/alerts/error-popup/error-popup';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppHeaderComponent } from './shared/components/app-header/app-header.component';
import { AppFooterComponent } from './shared/components/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorPopupComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports:[
    ErrorPopupComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
