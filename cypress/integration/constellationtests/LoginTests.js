import LoginPage from "../../pages/LoginPage"
describe('Login Test Suite', function() {

    this.beforeEach(() => {
        // runs once before each test in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
      })

    
    it('Login Test Success', function(){

        const loginPage = new LoginPage()
        cy.visit(Cypress.env('url'))
        loginPage.emailField().type(this.data.emailCorrect)
        loginPage.passwoField().type(this.data.passwordCorrect)
        loginPage.loginButton().click()
        loginPage.loginSuccessMessage().should('be.visible')
    })

    it('Login Test Failure Too Short Password', function(){

        const loginPage = new LoginPage()
        cy.visit(Cypress.env('url'))
        loginPage.emailField().type(this.data.emailCorrect)
        loginPage.passwoField().type(this.data.passwordTooShort)
        loginPage.loginButton().click()
        loginPage.passwordTooShortError().should('be.visible')
    })

    it('Login Test Failure Empty Password', function(){

        const loginPage = new LoginPage()
        cy.visit(Cypress.env('url'))
        loginPage.emailField().type(this.data.emailCorrect)
        loginPage.loginButton().click()
        loginPage.emptyPasswordError().should('be.visible')
    })

    it('Login Test Failure Empty Email', function(){

        const loginPage = new LoginPage()
        cy.visit(Cypress.env('url'))
        loginPage.passwoField().type(this.data.passwordTooShort)
        loginPage.loginButton().click()
        loginPage.emptyEmailError().should('be.visible')
    })

    it('Login Test Failure Invalid Email and Password', function(){

        const loginPage = new LoginPage()
        cy.visit(Cypress.env('url'))
        loginPage.emailField().type(this.data.emailIncorrect)
        loginPage.passwoField().type(this.data.passwordIncorrect)
        loginPage.loginButton().click()
        loginPage.genericLoginError().should('be.visible')
    })
})