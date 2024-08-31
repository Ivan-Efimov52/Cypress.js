describe('Проверка авторизации', function () {

    it('Вводим верный логин и пароль', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type ('german@dolnikov.ru');
         cy.get('#pass').type ('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('Делаем восстановление пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('EfimovIvan@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Вводим верный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type ('german@dolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio11');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Вводим неверный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type ('german@dolnikov.r');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.wait(2000);
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Проверка строчки "Логин" на распознание валидности email', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type ('germandolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Вводим логин с верхним и нижнем регистром и пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type ('GerMan@Dolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

 }) 

 