import { ChitchatPage } from './app.po';

describe('chitchat App', function() {
  let page: ChitchatPage;

  beforeEach(() => {
    page = new ChitchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
