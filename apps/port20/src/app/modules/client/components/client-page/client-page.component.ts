import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'port20-client-page',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
