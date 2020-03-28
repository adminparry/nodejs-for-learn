import { SessionMiddleware } from './session.middleware';

describe('SessionMiddleware', () => {
  it('should be defined', () => {
    expect(new SessionMiddleware()).toBeDefined();
  });
});
