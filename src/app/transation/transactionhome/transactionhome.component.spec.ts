import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionhomeComponent } from './transactionhome.component';

describe('TransactionhomeComponent', () => {
  let component: TransactionhomeComponent;
  let fixture: ComponentFixture<TransactionhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionhomeComponent]
    });
    fixture = TestBed.createComponent(TransactionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
