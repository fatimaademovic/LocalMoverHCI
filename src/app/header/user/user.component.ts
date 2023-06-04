import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../../services/auth.service';

export interface Option {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @ViewChild('settingsDropdown', { static: false }) dropdownEL!: ElementRef;
  open = false;
  options: Option[] = [
    {
      name: 'Logout',
      icon: 'logout',
    },
  ];

  @Input() user;

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

  constructor(private eRef: ElementRef, private authService: AuthService) {}

  setOption(option: Option) {
    this.open = false;
    if (option.name === 'Logout') {
      this.authService.logout();
    }
  }
}
