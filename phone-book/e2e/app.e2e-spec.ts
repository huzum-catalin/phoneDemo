import { PhoneBookPage } from './app.po';

describe('phone-book App', function() {
  let page: PhoneBookPage;

  beforeEach(() => {
    page = new PhoneBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
