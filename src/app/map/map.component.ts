import { Component } from '@angular/core';
import { BuyTicketDialogComponent } from '../dialogs/buy-ticket-dialog/buy-ticket-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  iconAssetsPath = 'assets/icons/transport-';

  routes: any[] = [
    {
      type: "City Bus",
      name: "BUS 126",
      time: "In 14 minutes",
      icon: `${this.iconAssetsPath}bus.svg`,
      route: "Ilidza - Vijecnica"
    },
    {
      type: "City Train",
      name: "TRAIN 48TH",
      time: "Yesterday",
      icon: `${this.iconAssetsPath}train.svg`,
      route: "Ilidza - Vijecnica"
    },
    {
      type: "City Bus",
      name: "BUS 126",
      time: "Yesterday",
      icon: `${this.iconAssetsPath}bus.svg`,
      route: "Dobrinja - Trg Austrija"
    },
    {
      type: "City Train",
      name: "TRAIN 48TH",
      time: "Yesterday",
      icon: `${this.iconAssetsPath}train.svg`,
      route: "Ilidza - Malta"
    },
    {
      type: "City Bus",
      name: "BUS 126",
      time: "Yesterday",
      icon: `${this.iconAssetsPath}bus.svg`,
      route: "Ilidza - Cengic Vila"
    }
  ]

  constructor(private dialog: MatDialog) {}

  openBuyDialog() {
    this.dialog.open(BuyTicketDialogComponent, {
      height: '250px',
      width: '300px',
      disableClose: true,
    });
  }
}
