import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent {
  @Input() imageSrc: string | undefined;
  @Input() backgroundColor: string | undefined;
  @Input() textColor: string | undefined;
  @Input() comment: string | undefined;
  @Input() profilePictureSrc: string | undefined;
  @Input() name: string | undefined;
  @Input() company: string | undefined;
}
