import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'port20-client-action-card',
  template: `
    <div class="uk-grid-divider uk-flex-middle uk-height-1-1 uk-flex-center" uk-grid>
      <div><span uk-icon="icon:plus-circle; ratio:2"></span></div>
      <div><span class="uk-text-uppercase">Добавить проект</span></div>
    </div>
  `,
  styles: [
    ':host {cursor: pointer}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientActionCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
