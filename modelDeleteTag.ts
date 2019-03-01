import { Selector, t } from 'testcafe';
import CreateTag from './modelCreateTag';

const navCreateTag = new CreateTag();

export default class ModelDeleteTag {
  navMenuTSDS: any; //Главное меню
  navSettings: any; //Настройки приложений
  navTSDS: any; //Навигаия
  navTagCreate: any;  //Создание тега
  navFilter: any; //Фильтр тегов
  navCheckBox: any; //Выделение тега
  navTagDelete: any; //Удаление тега

  constructor() {
    this.navMenuTSDS = Selector ('app-nav-menu > div:nth-child(11) > div:nth-child(2) > h4');
    this.navSettings = Selector ('.mat-tree-node').nth(18).find('div').withText('Настройки приложений');
    this.navTSDS = Selector('body > app-root > app-system > div > div.mainContent > div.container.fill > mat-sidenav-container > mat-sidenav-content > app-tag-menu > div > div.navigation > tag-menu-navigation > div > mat-tree > mat-nested-tree-node:nth-child(2) > li > ul > mat-nested-tree-node > li > div');
    this.navTagCreate = Selector('mat-nested-tree-node:nth-child(2) mat-nested-tree-node mat-tree-node:nth-child(1)');
    this.navFilter = Selector('body > app-root > app-system > div > div.mainContent > div.container.fill > mat-sidenav-container > mat-sidenav-content > app-tag-menu > div > div.content > app-tag-create > div > div.tagHeader > div.findContainer > input');
    this.navCheckBox = Selector('#mat-checkbox-2');
    this.navTagDelete = Selector('.delIco.Ico');

  }



  async startDeleteTag() {
    await t
    .click(this.navMenuTSDS)
    .click(this.navSettings)
    .click(this.navTSDS)
    .click(this.navTagCreate)
    .click(this.navFilter)
    .typeText(this.navFilter, 'TagTest')
    .click(this.navCheckBox)
    .click(this.navTagDelete);
  }
}
