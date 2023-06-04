import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

export interface Language {
  lang: string;
  flag: string;
}

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.scss'],
})
export class LanguageDropdownComponent {
  @ViewChild('dropdown', { static: false }) dropdownEL!: ElementRef;
  open = false;
  selectedLanguage: Language = {
    lang: 'English',
    flag: 'assets/flags/uk.svg',
  };
  languages: Language[] = [
    {
      lang: 'English',
      flag: 'assets/flags/uk.svg',
    },
    {
      lang: 'Bosnian',
      flag: 'assets/flags/bosnia.svg',
    },
  ];

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target) && this.open) {
      this.open = false;
    } else if (
      this.eRef.nativeElement.contains(event.target) &&
      this.dropdownEL &&
      !this.dropdownEL.nativeElement.contains(event.target)
    ) {
      this.open = false;
    } else if (this.eRef.nativeElement.contains(event.target)) {
      this.open = true;
    }
  }

  constructor(private eRef: ElementRef) {}

  setLanguage(lang: Language) {
    this.selectedLanguage = lang;
    this.open = false;
  }
}
