import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { bannersContent } from 'src/app/shared/constants/banners-content.const';
import { cardsContent } from 'src/app/shared/constants/cards-content.const';
import { serviceDescription } from 'src/app/shared/constants/service-description.const';
import { Swiper, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('slider', { static: true }) items: ElementRef | undefined;
  @ViewChild('swiperRef') swiper?: Swiper;
  swiperRef: ElementRef | undefined;
  slides = cardsContent.testimonails;
  ourMissionBanner = bannersContent.ourMission;
  ourServicesBanner = bannersContent.ourServices;
  clientOpionionsBanner = bannersContent.clientOpionions;
  ourMissionCardsList = cardsContent.ourMission;
  ourMissionCardList2 = cardsContent.ourMission2;
  residentalLivingContent = serviceDescription.residentalService;
  medicalTransportService = serviceDescription.medicalService;

  constructor(private router: Router) {}

  ngOnInit() {
    this.scrollToTop();
  }

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.5,
      },
      1280: {
        slidesPerView: 3,
      },
    },
    navigation: false,
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled: false,
      draggable: true,
    },
  };

  onBtnClick(): void {
    this.router.navigate(['/contact-us']);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
