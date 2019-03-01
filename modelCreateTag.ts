import { Selector, t } from 'testcafe';

export default class CreateTag {  
    navMenuTSDS: any;
    navSettingApp: any 
    navSettingTSDS: any; 
    navCreateTag: any;
    addNewTag: any;
    nameTag: any;
    typeTag: any;
    typeTagSelect: any;
    descriptionTag: any;
    saveAddNewTag: any;

    //Путь к добавленному тегу
    tableTags: any;

    constructor() {
        this.navMenuTSDS = Selector ('app-nav-menu > div:nth-child(11) > div:nth-child(2) > h4');
        this.navSettingApp = Selector('mat-nested-tree-node:nth-child(2) button');
        this.navSettingTSDS = Selector('mat-nested-tree-node:nth-child(2) mat-nested-tree-node button');
        this.navCreateTag = Selector('mat-nested-tree-node:nth-child(2) mat-nested-tree-node mat-tree-node:nth-child(1)');
        this.addNewTag = Selector('.btnPlusIco');
        this.nameTag = Selector('#cdk-accordion-child-0 span.spanContainerFirst  div:nth-child(1) > input');
        this.typeTag = Selector('#cdk-accordion-child-0 span.spanContainerFirst div:nth-child(2)');
        this.typeTagSelect = Selector('#cdk-accordion-child-0 span.spanContainerFirst div:nth-child(2) option:nth-child(3)');
        this.descriptionTag = Selector('#cdk-accordion-child-0 span.spanContainerFirst > div > input');
        this.saveAddNewTag = Selector('#cdk-accordion-child-0 span.spanContainerLast button');

        //Путь к добавленному тегу
        this.tableTags = Selector('body > app-root > app-system > div > div.mainContent > div.container.fill > mat-sidenav-container > mat-sidenav-content > app-tag-menu > div > div.content > app-tag-create > div > div.view > div > table > tbody > tr > td.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted');
    }

    async startCreateTag() {
        await t
            .click(this.navMenuTSDS)
            .click(this.navSettingApp)
            .click(this.navSettingTSDS)
            .click(this.navCreateTag)
            .click(this.addNewTag)
            .typeText(this.nameTag, 'TagTest')
            .click(this.typeTag)
            .click(this.typeTagSelect)
            .typeText(this.descriptionTag, 'Описание 1')
            .click(this.saveAddNewTag)
            .expect(this.tableTags.innerText).eql('TagTest');
    }
}
