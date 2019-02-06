import { ClienteGestorPortfolioPage } from './app.po';

describe('cliente-gestor-portfolio App', function() {
  let page: ClienteGestorPortfolioPage;

  beforeEach(() => {
    page = new ClienteGestorPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
