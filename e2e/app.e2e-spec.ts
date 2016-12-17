import { ChannelPage } from './app.po';

describe('channel App', function() {
  let page: ChannelPage;

  beforeEach(() => {
    page = new ChannelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
