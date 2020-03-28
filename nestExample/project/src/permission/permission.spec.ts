import { Test, TestingModule } from '@nestjs/testing';
import { Permission } from './permission';

describe('Permission', () => {
  let provider: Permission;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Permission],
    }).compile();

    provider = module.get<Permission>(Permission);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
