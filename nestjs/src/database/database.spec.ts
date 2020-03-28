import { Test, TestingModule } from '@nestjs/testing';
import { Database } from './database';

describe('Database', () => {
  let provider: Database;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Database],
    }).compile();

    provider = module.get<Database>(Database);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
