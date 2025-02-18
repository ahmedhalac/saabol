import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() backgroundColor: string | undefined;
  @Input() textColor: string | undefined;
  @Input() iconSource: string | undefined;

  shouldHidePadding = false;

  ngOnInit(): void {
    this.shouldHidePadding = this.subtitle === undefined;
  }
}
