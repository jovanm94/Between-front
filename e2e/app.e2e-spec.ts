import { BetweenWebappPage } from './app.po';

describe('between-webapp App', () => {
  let page: BetweenWebappPage;

  beforeEach(() => {
    page = new BetweenWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
