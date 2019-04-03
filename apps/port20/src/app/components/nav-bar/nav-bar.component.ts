import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'port20-nav-bar',
  template: `
    <nav class="uk-navbar-container" uk-navbar></nav>
    <div class="uk-container uk-container-small uk-flex uk-flex-center uk-position-relative uk-margin-bottom">
      <div class="pyramid uk-width-small uk-text-center">
        <a routerLink="/" class="uk-display-block uk-margin-top" href="">NAGSER.RU</a>
      </div>
    </div>
  `,
  styles: [
    'nav {height: 30px;}',
    '.pyramid {height: 60px;}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
