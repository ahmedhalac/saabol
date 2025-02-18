import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { bannersContent } from 'src/app/shared/constants/banners-content.const';
import { serviceDescription } from 'src/app/shared/constants/service-description.const';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  @ViewChild('slider', { static: true }) items: ElementRef | undefined;
  ourServicesBanner2 = bannersContent.ourServices2;
  ourMissionBanner = bannersContent.ourMission2;
  ourVisionBanner = bannersContent.ourVision;
  residentalLivingContent = serviceDescription.residentalService2;
  medicalTransportService = serviceDescription.medicalService2;
  constructor(private router: Router) {}

  ngOnInit() {
    this.scrollToTop();
  }

  onBtnClick(): void {
    this.router.navigate(['/contact-us']);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
