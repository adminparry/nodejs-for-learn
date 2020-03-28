import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseProvider } from './database-provider';

describe('DatabaseProvider', () => {
  let provider: DatabaseProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseProvider],
    }).compile();

    provider = module.get<DatabaseProvider>(DatabaseProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
