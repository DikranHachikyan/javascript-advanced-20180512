import { TestBed, inject } from '@angular/core/testing';

import { StaticDatasourceService } from './static-datasource.service';

describe('StaticDatasourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticDatasourceService]
    });
  });

  it('should be created', inject([StaticDatasourceService], (service: StaticDatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
