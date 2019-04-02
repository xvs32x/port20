import { Component } from "@angular/core";

@Component({
  selector: "port20-root",
  template: `
    <div class="uk-cover-container" uk-height-viewport>
      <video class="uk-animation-fade" autoplay loop muted playsinline uk-cover>
        <source src="assets/videos/body.mp4" type="video/mp4">
      </video>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
}
