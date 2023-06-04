import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulTransactionDialogComponent } from './successful-transaction-dialog.component';

describe('SuccessfulTransactionDialogComponent', () => {
  let component: SuccessfulTransactionDialogComponent;
  let fixture: ComponentFixture<SuccessfulTransactionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessfulTransactionDialogComponent]
    });
    fixture = TestBed.createComponent(SuccessfulTransactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
