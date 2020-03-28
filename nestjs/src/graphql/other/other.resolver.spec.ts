import { Test, TestingModule } from '@nestjs/testing';
import { OtherResolver } from './other.resolver';

describe('OtherResolver', () => {
  let resolver: OtherResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtherResolver],
    }).compile();

    resolver = module.get<OtherResolver>(OtherResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
