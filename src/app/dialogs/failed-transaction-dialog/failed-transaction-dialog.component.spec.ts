import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedTransactionDialogComponent } from './failed-transaction-dialog.component';

describe('FailedTransactionDialogComponent', () => {
  let component: FailedTransactionDialogComponent;
  let fixture: ComponentFixture<FailedTransactionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FailedTransactionDialogComponent]
    });
    fixture = TestBed.createComponent(FailedTransactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
