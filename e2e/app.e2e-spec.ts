import { NblogPage } from './app.po';

describe('nblog App', () => {
  let page: NblogPage;

  beforeEach(() => {
    page = new NblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
