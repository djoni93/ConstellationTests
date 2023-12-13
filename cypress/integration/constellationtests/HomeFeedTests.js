import LoginPage from "../../pages/LoginPage"
import HomeFeedPage from "../../pages/HomeFeedPage"
describe('Home Feed Test Suite', function() {

    this.beforeEach(() => {
        // runs once before each test in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
      })

    
    it('Home Feed Whole Flow', function(){

        const loginPage = new LoginPage()
        const homeFeedPage = new HomeFeedPage()
        cy.visit(Cypress.env('url'))
        loginPage.emailField().type(this.data.emailCorrect)
        loginPage.passwoField().type(this.data.passwordCorrect)
        loginPage.loginButton().click()
        loginPage.loginSuccessMessage().should('be.visible')
        homeFeedPage.homeButton().should('be.visible')
        homeFeedPage.postInputField().type(this.data.randomPostCommentText)
        homeFeedPage.newPostButton().click()
        cy.wait(2000)
        homeFeedPage.postInputField().type(this.data.randomPostCommentText)
        homeFeedPage.startRecordingButton().click()
        cy.wait(2000)
        homeFeedPage.stopRecordingButton().click()
        homeFeedPage.newPostButton().click()
        homeFeedPage.audioPostPlayButton().first().click().should('have.attr','alt','Pause')
        cy.wait(2000)
        homeFeedPage.audioPostPlayButton().first().click()
        homeFeedPage.likeButton().first().click()
        homeFeedPage.commentButton().first().click()
        homeFeedPage.closeCommentDialogueButton().should('be.visible')
        homeFeedPage.commentInputField().click().type(this.data.randomPostCommentText)
        homeFeedPage.submitCommentButton().click()
        homeFeedPage.commentText().first().should('have.text',this.data.randomPostCommentText)
        homeFeedPage.deleteCommentButton().click()
        homeFeedPage.closeCommentDialogueButton().click()
        homeFeedPage.logOutButton().click({force:true})
        cy.wait(1000)
        loginPage.emailField().should('be.visible')
    })

    
})