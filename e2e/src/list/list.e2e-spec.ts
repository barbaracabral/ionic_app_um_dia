import { ListPage } from './../page/list.po';

describe('Acessing List Page', () => {
  let page: ListPage;

  beforeEach(() => {
    page = new ListPage();
  });
  describe('default screen', () => {

    beforeEach(() => {
      page.navigateTo('/list');
    });

    it('should have a title saying List', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('List');
      });
    });

  });
});
