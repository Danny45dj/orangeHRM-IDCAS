import copyrightText from "../../fixtures/enums/copyrightText";
import socialMedia from "../../fixtures/enums/socialMedia";

const validateVersionDetail = (message) => {
    cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').then(($element) => {
        const str = $element.text();
        const regex = new RegExp(/^(\d{1})+(\.\d{1})$/);
        const validationVersion = str.split(' ')[2];
        expect(regex.test(validationVersion)).to.be.true;
        
        const validacionStr = `${str.split(' ')[0]} ${str.split(' ')[1]}`;
        expect(message).to.be.equal(validacionStr);
    });
}

const corporationDescText = () => {
    return cy.get('.orangehrm-copyright-wrapper > :nth-child(2)').then(($element) => {
        const str = $element.text();
        const currentDate = str.split(' ')[3];
        const dateobj = new Date();

        expect(currentDate).to.be.equal(dateobj.getFullYear().toString());
    });
}

const corporationDescUrl = () => {
    return cy.get('.orangehrm-copyright-wrapper > :nth-child(2) > a');
}

const linkedInSocialMedia = () => {
    return cy.get('.orangehrm-login-footer-sm > a:nth-child(1)');
}

const facebookSocialMedia = () => {
    return cy.get('.orangehrm-login-footer-sm > a:nth-child(2)');
}

const twitterSocialMedia = () => {
    return cy.get('.orangehrm-login-footer-sm > a:nth-child(3)');
}

const youtubeSocialMedia = () => {
    return cy.get('.orangehrm-login-footer-sm > a:nth-child(4)');
}

const footerValidation = () =>  {
    validateVersionDetail(copyrightText.enumCopyrightText.COPYRIGHT_VERSION);
    cy.hasText(corporationDescText(), copyrightText.enumCopyrightText.COPYRIGHT_DESC);
    cy.hasAttr(corporationDescUrl(), copyrightText.enumCopyrightText.COPYRIGHT_URL);
    cy.hasAttr(linkedInSocialMedia(), socialMedia.enumSocialMedia.LINKEDIN);
    cy.hasAttr(facebookSocialMedia(), socialMedia.enumSocialMedia.FACEBOOK);
    cy.hasAttr(twitterSocialMedia(), socialMedia.enumSocialMedia.TWITTER);
    cy.hasAttr(youtubeSocialMedia(), socialMedia.enumSocialMedia.YOUTUBE);
}

export default {
    footerValidation
}