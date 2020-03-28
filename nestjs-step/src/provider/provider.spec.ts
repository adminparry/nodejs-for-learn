import { Test, TestingModule } from '@nestjs/testing';
import { Provider } from './provider';

describe('Provider', () => {
  let provider: Provider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Provider],
    }).compile();

    provider = module.get<Provider>(Provider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
