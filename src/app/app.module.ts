import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ProductsModule } from './products/products.module';
import * as fromApp from './store/app.reducer';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer,  {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
        strictActionWithinNgZone: false,
        strictActionTypeUniqueness: false,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
