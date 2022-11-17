import { Test, TestingModule } from '@nestjs/testing';
import { PathService } from './path.service';

describe('PathService', () => {
  let service: PathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PathService],
    }).compile();

    service = module.get<PathService>(PathService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
