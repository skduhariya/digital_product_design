import { isPlatformBrowser } from '@angular/common';
import { Component, Renderer2, OnDestroy, RendererFactory2, Inject, PLATFORM_ID  } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss'
})
export class PageHeader implements OnDestroy {
  private renderer: Renderer2;
  private isBrowser: boolean;

  private navActive = false;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  toggleNav(event: Event): void {
    event.preventDefault();

    if (!this.isBrowser) return; // ⛔ don't run this on the server

    this.navActive = !this.navActive;

    if (this.navActive) {
      this.renderer.addClass(document.body, 'nav--active');
    } else {
      this.renderer.removeClass(document.body, 'nav--active');
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.renderer.removeClass(document.body, 'nav--active');
    }
  }

}
