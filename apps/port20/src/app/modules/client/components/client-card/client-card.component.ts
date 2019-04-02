import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'port20-client-card',
  template: `
    <h3 class="uk-text-uppercase uk-margin-remove">{{client.name}}</h3>
    <div>{{client.subtitle}}</div>
  `,
  styles: [
    ':host {cursor: pointer}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientCardComponent implements OnInit {
  @Input() client: Client;
  constructor() { }

  ngOnInit() {
  }

}
