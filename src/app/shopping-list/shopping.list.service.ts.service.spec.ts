import { TestBed } from '@angular/core/testing';

import { Shopping.List.Service.TsService } from './shopping.list.service.ts.service';

describe('Shopping.List.Service.TsService', () => {
  let service: Shopping.List.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shopping.List.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
