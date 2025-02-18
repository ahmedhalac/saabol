import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { CardComponent } from './shared/components/card/card.component';
import { ServiceDescriptionComponent } from './shared/components/service-description/service-description.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SwiperDirective } from './shared/directives/swiper.directive';
import { TestimonialCardComponent } from './shared/components/testimonial-card/testimonial-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    ServiceDescriptionComponent,
    AboutUsComponent,
    ContactUsComponent,
    SwiperDirective,
    TestimonialCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
