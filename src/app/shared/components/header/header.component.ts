import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { colors, urls } from '../../constants/common.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMobileMenuActive = false;
  urlPath: any;
  backgroundColor: string | undefined;
  urlWithoutQueryParams: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.urlPath = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const [basePath] = event.urlAfterRedirects.split('?');
        this.setHeaderBackgroundColor(basePath);
      }
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  private setHeaderBackgroundColor(url: string): void {
    const colorMapping = {
      [urls.home]: colors.home,
      [urls.aboutUs]: colors.aboutUs,
      [urls.contactUs]: colors.contactUs,
    };
    this.backgroundColor = colorMapping[url] || colors.defaultActive;
    this.setActiveLinksColor(url);
  }

  private mapActiveLinksColor(url: string): string {
    const colorMapping = {
      [urls.home]: colors.homeActive,
      [urls.aboutUs]: colors.aboutUsActive,
      [urls.contactUs]: colors.contactUsActive,
    };
    return colorMapping[url] || colors.defaultActive;
  }

  private setActiveLinksColor(url: string): void {
    document.documentElement.style.setProperty(
      '--active-link-color',
      this.mapActiveLinksColor(url)
    );
  }

  ngOnDestroy(): void {
    this.urlPath.unsubscribe();
  }
}
