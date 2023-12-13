class HomeFeedPage
{

    homeButton()
    {
        return cy.get(':nth-child(1) > .home__header__link')
    }

    logOutButton()
    {
        return cy.get(':nth-child(2) > .home__header__link')
    }

    startRecordingButton()
    {
        return cy.get('#startRecordingButton')
    }

    stopRecordingButton()
    {
        return cy.get('#stopRecordingButton')
    }

    clearRecordingButton()
    {
        return cy.get('#clearRecordingButton')
    }

    newPostButton()
    {
       return  cy.get('#submitPostBtn')
    }

    postInputField()
    {
        return cy.get('.form-control')
    }

    likeButton()
    {
        return cy.get('button .fa-heart')
    }

    commentButton()
    {
        return cy.get('button .fa-comment')
    }

    commentInputField()
    {
        return cy.get('input[placeholder="Write a comment"]')
    }

    submitCommentButton()
    {
        return cy.get('.svg-inline--fa.fa-paper-plane')
    }

    deleteCommentButton()
    {
        return cy.get('.post__deleteBtn:nth-child(2)')
    }

    closeCommentDialogueButton()
    {
        return cy.get('.btn-close')
    }

    commentText()
    {
        return cy.get('.post__comments__list .post__description')
    }

    audioPostPlayButton()
    {
        return cy.get('.voice-visualizer__btn-left:first-of-type img')
    }

    postDescription()
    {
        return cy.get('.home__main__feed__post__body .post__description')
    }


}

export default HomeFeedPage