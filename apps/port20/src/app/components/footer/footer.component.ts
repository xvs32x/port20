import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'port20-footer',
  template: `
    <div class="uk-container uk-container-small uk-flex uk-flex-center uk-position-relative uk-margin-top">
      <div class="pyramid uk-width-small uk-text-center">
        <a routerLink="/" class="uk-display-block uk-margin-top" href="">
          <span uk-icon="icon: github; ratio: 1.5"></span>
        </a>
      </div>
    </div>
    <nav class="uk-navbar-container" uk-navbar></nav>
  `,
  styles: [
    'nav {height: 30px;}',
    '.pyramid {height: 60px;}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
