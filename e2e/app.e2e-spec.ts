import { BetweenPage } from './app.po';

describe('between App', () => {
  let page: BetweenPage;

  beforeEach(() => {
    page = new BetweenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
