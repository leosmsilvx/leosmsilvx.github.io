import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'landing-component',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  anoAtual = new Date().getFullYear();

  ngOnInit() {
    this.initLanguage();
    this.initTextAnimation();
  }

  isLightTheme: boolean = false;
  changeTheme() {
    const body = document.body;
    this.isLightTheme = !this.isLightTheme;
    if (this.isLightTheme) {
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
    }
  }

  private translate = inject(TranslateService);
  loading: boolean = true;
  currentLang: string = 'pt';
  changeLanguage() {
    this.loading = true;

    this.currentLang = this.currentLang === 'pt' ? 'en' : 'pt';
    setTimeout(() => {
      this.translate.use(this.currentLang).subscribe(() => {
        this.loading = false;
        this.initTextAnimation();
      });
    }, 300);

    localStorage.setItem('lang', this.currentLang);
  }

  initLanguage() {
    let saved = 'pt';
    if (isPlatformBrowser(this.platformId)) {
      saved = localStorage.getItem('lang') ?? 'pt';
    }
    this.loading = true;
    this.currentLang = saved;
    this.translate.setDefaultLang(saved);
    this.translate.use(saved).subscribe(() => {
      this.loading = false;
    });
  }

  redirectTo(url: string) {
    window.open(url, '_blank');
  }

  fullText: string = '';
  animatedText: string = '';
  initTextAnimation() {
    clearInterval(this.intervalId);
    this.animatedText = '';
    this.translate.get('TX-DEVELOPER').subscribe((text: string) => {
      this.fullText = text;
      this.startTyping();
    });
  }

  private intervalId: any;
  startTyping() {
    let index = 0;
    this.animatedText = 'ㅤ';

    this.intervalId = setInterval(() => {
      if (index < this.fullText.length) {
        this.animatedText += this.fullText.charAt(index);
        index++;
      } else {
        clearInterval(this.intervalId);
      }
    }, 60);
  }
}
