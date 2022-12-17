import errorMessagesLogin from "../fixtures/enums/errorMessagesLogin";
import footer from "./components/footer";
import loginPage from "./pages/loginPage";
import messagesResetPassword from "../fixtures/enums/messagesResetPassword";
import notifications from "./components/notifications";
import pages from "../fixtures/enums/pages";
import resetPasswordPage from "./pages/resetPasswordPage";
import validateConfirmationResetPass from "./components/validateConfirmationResetPass";

describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('/login');
        footer.footerValidation();
        cy.fixture('users').then((user) => {
            globalThis.username = user[0].username;
            globalThis.password = user[0].password; 
            globalThis.wrongUsername = user[1].username;
            globalThis.wrongPassword = user[1].password;
        });
    });

    it('Login | Successfully', () => {
        cy.login(username, password);
        cy.url().should('include', pages.enumPages.HOME);
    });

    it('Login | Unsuccessfully with wrong username', () => {
        cy.login(wrongUsername, password);
        cy.hasText(notifications.invalidCredendialsMessage(), errorMessagesLogin.enumErrorMessagesLogin.WRONG_CREDENTIAL_MESSAGE);
        cy.url().should('include', pages.enumPages.LOGIN);
    });

    it('Login | Unsuccessfully with wrong password', () => {
        cy.login(username, wrongPassword);
        cy.hasText(notifications.invalidCredendialsMessage(), errorMessagesLogin.enumErrorMessagesLogin.WRONG_CREDENTIAL_MESSAGE);
        cy.url().should('include', pages.enumPages.LOGIN);
    });

    it('Login | Unsuccessfully with wrong username and password', () => {
        cy.login(wrongUsername, wrongPassword);
        cy.hasText(notifications.invalidCredendialsMessage(), errorMessagesLogin.enumErrorMessagesLogin.WRONG_CREDENTIAL_MESSAGE);
        cy.url().should('include', pages.enumPages.LOGIN);
    });

    it('Login | Unsuccessfully with empty username and password', () => {
        loginPage.usernameInput().should('be.empty');
        loginPage.passwordinput().should('be.empty');
        loginPage.submitButton().should('be.visible').click();
        cy.hasText(notifications.usernameRequiredMessage(), errorMessagesLogin.enumErrorMessagesLogin.INPUT_REQUIRED_MESSAGE);
        cy.hasText(notifications.passwordRequiredMessage(), errorMessagesLogin.enumErrorMessagesLogin.INPUT_REQUIRED_MESSAGE);
        cy.url().should('include', pages.enumPages.LOGIN);
    });
    
    it('Login Reset Password | Successfully fill in form Forgot password', () => {
        resetPasswordPage.forgotPasswordLink().click();
        cy.url().should('include', pages.enumPages.FORGOT_PASSWORD);
        cy.hasText(resetPasswordPage.titleResetForm(), messagesResetPassword.enumFormResetPassword.TITLE_FORM);
        cy.hasText(resetPasswordPage.descResetForm(), messagesResetPassword.enumFormResetPassword.DESC_FORM);
        resetPasswordPage.usernameInputResetForm().should('be.empty').type(username);
        resetPasswordPage.resetPasswordButton().should('be.visible').click();
        cy.url().should('include', pages.enumPages.SEND_PASSWORD_RESET);
        validateConfirmationResetPass.validationFormConfirmationSendPassword();
    });

    it('Login Reset Password | Successfully fill in form Forgot password with non-existing username', () => {
        resetPasswordPage.forgotPasswordLink().click();
        cy.url().should('include', pages.enumPages.FORGOT_PASSWORD);
        cy.hasText(resetPasswordPage.titleResetForm(), messagesResetPassword.enumFormResetPassword.TITLE_FORM);
        cy.hasText(resetPasswordPage.descResetForm(), messagesResetPassword.enumFormResetPassword.DESC_FORM);
        resetPasswordPage.usernameInputResetForm().should('be.empty').type(wrongUsername);
        resetPasswordPage.resetPasswordButton().should('be.visible').click();
        cy.url().should('include', pages.enumPages.SEND_PASSWORD_RESET);
        validateConfirmationResetPass.validationFormConfirmationSendPassword();
    });

    it('Login Reset Password | Unsuccessfully fill in form Forgot password when username field is empty', () => {
        resetPasswordPage.forgotPasswordLink().click();
        cy.url().should('include', pages.enumPages.FORGOT_PASSWORD);
        cy.hasText(resetPasswordPage.titleResetForm(), messagesResetPassword.enumFormResetPassword.TITLE_FORM);
        cy.hasText(resetPasswordPage.descResetForm(), messagesResetPassword.enumFormResetPassword.DESC_FORM);
        resetPasswordPage.usernameInputResetForm().should('be.empty');
        resetPasswordPage.resetPasswordButton().should('be.visible').click();
        cy.hasText(notifications.usernameRequiredMessageinFormResetPass(), errorMessagesLogin.enumErrorMessagesLogin.INPUT_REQUIRED_MESSAGE);
    });

    it('Login Reset Password | Unsuccessfully fill in form Forgot password when is clicked the cancel button', () => {
        resetPasswordPage.forgotPasswordLink().click();
        cy.url().should('include', pages.enumPages.FORGOT_PASSWORD);
        cy.hasText(resetPasswordPage.titleResetForm(), messagesResetPassword.enumFormResetPassword.TITLE_FORM);
        cy.hasText(resetPasswordPage.descResetForm(), messagesResetPassword.enumFormResetPassword.DESC_FORM);
        resetPasswordPage.resetCancelButton().should('be.visible').click();
        cy.url().should('include', pages.enumPages.LOGIN);
    });
});