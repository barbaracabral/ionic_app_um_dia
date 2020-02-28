import { AppPage } from './../page/app.po';

describe('New App open in Home Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/home');
    });

    it('should have a title saying Home', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Home');
      });
    });

    it('should have a splash showing the Logo', () => {
      page.isSplashImagePresent().then(imagePresent => {
        expect(imagePresent).toEqual(true);
      });
    });

  });
});
