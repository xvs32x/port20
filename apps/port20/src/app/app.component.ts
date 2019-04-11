import { Component } from "@angular/core";

@Component({
  selector: "port20-root",
  template: `
    <div class="uk-cover-container" uk-height-viewport>
      <img class="uk-animation-fade" src="assets/images/body.jpg" alt="" uk-cover>
      <video class="uk-animation-fade"  autoplay loop muted playsinline uk-cover>
        <source src="assets/videos/body.mp4" type="video/mp4">
      </video>
      <div class="uk-flex uk-flex-column" uk-height-viewport>
        <port20-nav-bar class="uk-display-block uk-animation-slide-bottom"></port20-nav-bar>
        <router-outlet></router-outlet>
        <port20-footer class="uk-display-block uk-animation-slide-top"></port20-footer>
      </div>
    </div>
  `
})
export class AppComponent {
}
