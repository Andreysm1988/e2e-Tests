import {Selector, t} from 'testcafe';

export default class PageAuth {
    nameInput: any;
    passInput: any;
    btnInput: any;
    finishContainer: any;
    constructor () {
        this.nameInput = Selector('#userName');
        this.passInput = Selector('#password');
        this.btnInput = Selector('.btn');
        //Компонент на странице по которому определяем успех теста.
        this.finishContainer = Selector('.container p');
    }
    //Вход на страницу CAA-TS
    WebPageCAA_TS() {
      fixture `Getting Started`
        .page `http://localhost:4200`;
    }

    //Проверка авторизации
    async startAuthorization() {
      await t
            .typeText(this.nameInput, 'sam')
            .typeText(this.passInput, 'sam')
            .click(this.btnInput)
            .expect(this.finishContainer.innerText).eql('Выберите Компонент');
    }

}



