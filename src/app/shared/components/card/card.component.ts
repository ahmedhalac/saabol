import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title: string | undefined;
  @Input() text1: string | undefined;
  @Input() text2: string | undefined;
  @Input() backgroundColor: string | undefined;
  @Input() textColor: string | undefined;

  ngOnInit(): void {}
}
