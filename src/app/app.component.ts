import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
   /*const userLang =navigator.language || 'en';
   const languageCode =userLang.split('=') [0];
   this.translate.setDefaultLang(languageCode);
   this.translate.use(languageCode);*/
  }
   
  switchLanguage(lang: 'fr' | 'en') {
    this.translate.use(lang);
  }
}
