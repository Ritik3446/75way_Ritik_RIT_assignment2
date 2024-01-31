import { TestBed } from '@angular/core/testing';

import { TransactiondataService } from './transactiondata.service';

describe('TransactiondataService', () => {
  let service: TransactiondataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactiondataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
