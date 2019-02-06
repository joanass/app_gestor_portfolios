import { AppGestorPortfolPage } from './app.po';

describe('app-gestor-portfol App', function() {
  let page: AppGestorPortfolPage;

  beforeEach(() => {
    page = new AppGestorPortfolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
