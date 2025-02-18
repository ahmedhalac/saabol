import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.scss'],
})
export class ServiceDescriptionComponent {
  @Input() title: string | undefined;
  @Input() text1: string | undefined;
  @Input() text2: string | undefined;
  @Input() text3: string | undefined;
  @Input() shouldShowButton = false;
  @Input() targetSectionId: string | undefined;

  shouldHideText3 = false;

  ngOnInit(): void {
    this.shouldHideText3 = this.text3 === undefined;
  }
}
