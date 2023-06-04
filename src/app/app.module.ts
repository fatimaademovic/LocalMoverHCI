import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LanguageDropdownComponent } from './header/language-dropdown/language-dropdown.component';
import { ContainerComponent } from './UI/container/container.component';
import { UserComponent } from './header/user/user.component';
import { TokensComponent } from './header/tokens/tokens.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './modules/routing/routing.module';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './dialogs/register-dialog/register-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsDropdownComponent } from './header/settings-dropdown/settings-dropdown.component';
import { TopupDialogComponent } from './dialogs/topup-dialog/topup-dialog.component';
import { PaymentStepOneDialogComponent } from './dialogs/payment-step-one-dialog/payment-step-one-dialog.component';
import { PaymentStepTwoDialogComponent } from './dialogs/payment-step-two-dialog/payment-step-two-dialog.component';
import { PaymentStepThreeDialogComponent } from './dialogs/payment-step-three-dialog/payment-step-three-dialog.component';
import { SuccessfulTransactionDialogComponent } from './dialogs/successful-transaction-dialog/successful-transaction-dialog.component';
import { FailedTransactionDialogComponent } from './dialogs/failed-transaction-dialog/failed-transaction-dialog.component';
import { BuyTicketDialogComponent } from './dialogs/buy-ticket-dialog/buy-ticket-dialog.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    UserComponent,
    LanguageDropdownComponent,
    SettingsDropdownComponent,
    TokensComponent,
    HomeComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    TopupDialogComponent,
    PaymentStepOneDialogComponent,
    PaymentStepTwoDialogComponent,
    PaymentStepThreeDialogComponent,
    SuccessfulTransactionDialogComponent,
    FailedTransactionDialogComponent,
    BuyTicketDialogComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
