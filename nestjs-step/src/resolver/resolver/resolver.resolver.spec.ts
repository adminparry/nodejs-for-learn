import { Test, TestingModule } from '@nestjs/testing';
import { ResolverResolver } from './resolver.resolver';

describe('ResolverResolver', () => {
  let resolver: ResolverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResolverResolver],
    }).compile();

    resolver = module.get<ResolverResolver>(ResolverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
