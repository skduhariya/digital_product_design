import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeader } from './page-header/page-header';
import { PageMain } from './page-main/page-main';
import { PageFooter } from './page-footer/page-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageHeader, PageMain, PageFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'digital_product_design';
}
