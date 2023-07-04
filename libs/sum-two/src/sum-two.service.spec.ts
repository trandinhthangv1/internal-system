import { Test, TestingModule } from '@nestjs/testing';
import { SumTwoService } from './sum-two.service';

describe('SumTwoService', () => {
  let service: SumTwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SumTwoService],
    }).compile();

    service = module.get<SumTwoService>(SumTwoService);
  });

  it('1 + 2 should return 3', () => {
    expect(service.sumTwo(1, 2)).toBe(3);
  });
});
