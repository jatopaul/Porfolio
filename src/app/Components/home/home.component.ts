import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentLang = 'en';

  constructor(private translate: TranslateService) {
    this.translate.use(this.currentLang);
  }

  toggleLang() {
    this.currentLang = this.currentLang === 'en' ? 'ml' : 'en';
    this.translate.use(this.currentLang);
  }
}
