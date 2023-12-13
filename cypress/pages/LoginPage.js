class LoginPage
{
    emailField()
    {
        return cy.get('#email')
    }

    passwoField()
    {
        return cy.get('#password')
    }

    loginButton()
    {
        return cy.get('#loginSubmitBtn')
    }

    emptyEmailError()
    {
        return cy.get(':nth-child(1) > .invalid-feedback')
    }

    emptyPasswordError()
    {
        return cy.get(':nth-child(2) > .invalid-feedback')
    }

    genericLoginError()
    {
        return cy.get('.login__errorMessage')
    }

    passwordTooShortError()
    {
        return cy.get(':nth-child(2) > .invalid-feedback')
    }

    loginSuccessMessage()
    {
        return cy.get('.toast-header')
    }

}

export default LoginPage