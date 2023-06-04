import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

export interface Option {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-settings-dropdown',
  templateUrl: './settings-dropdown.component.html',
  styleUrls: ['./settings-dropdown.component.scss'],
})
export class SettingsDropdownComponent {
  @ViewChild('settingsdropdown', { static: false }) dropdownEL!: ElementRef;
  open = false;
  selectedOption: Option = {
    name: 'Logout',
    icon: 'logout',
  };
  options: Option[] = [
    {
      name: 'Logout',
      icon: 'logout',
    },
  ];

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    console.log(event);
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

  setOption(option: Option) {
    this.selectedOption = option;
    this.open = false;
  }
}
