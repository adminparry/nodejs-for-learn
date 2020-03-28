import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from './user-repository';

describe('UserRepository', () => {
  let provider: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRepository],
    }).compile();

    provider = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
