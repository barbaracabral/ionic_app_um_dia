import { browser, by, element } from 'protractor';

export class ListPage {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.id('title_list')).getText();
  }
}
