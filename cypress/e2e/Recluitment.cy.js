import ErrorMessage from "./Components/ErrorMessage";
import LoginPage from "./Components/LoginPage"
import RegisterCandidatesPage from "./Components/RegisterCandidatesPage";
describe('New cantidates', () => {
    beforeEach (()=>{
        cy.visit('/login');
        cy.login();
        LoginPage.recluitmentSubmit().click()
        LoginPage.AddCandidatesSubmit().click()
    })

    it(('Adding candidates with all fields complete'),()=>{

        cy.fixture('formfixtures').then(names =>{
            RegisterCandidatesPage.fistName().type(names.name)
            RegisterCandidatesPage.middleName().type(names.secondName)
            RegisterCandidatesPage.lastName().type(names.lastNam)
            RegisterCandidatesPage.vacancy()
            RegisterCandidatesPage.emailCandidate().type(names.emailCan)
            RegisterCandidatesPage.contactNumber().type(names.contactNum)
//            RegisterCandidatesPage.resume().selectFile('cypress/e2e/pdf.pdf')
            RegisterCandidatesPage.keywords().type(names.keywords)
//            RegisterCandidatesPage.dateOfApplication()
            RegisterCandidatesPage.notes().type(names.noteText)       
            RegisterCandidatesPage.consent().click()
            RegisterCandidatesPage.saveSubmit().click()
        })
    })

    it(('Adding canditate just with required fields'),()=>{
        cy.fixture('formfixtures').then(names =>{
            RegisterCandidatesPage.fistName().should('be.empty').type(names.name)
            RegisterCandidatesPage.lastName().should('be.empty').type(names.lastNam)
            RegisterCandidatesPage.emailCandidate().should('be.empty').type(names.emailCan)
            RegisterCandidatesPage.saveSubmit().click()
        })
    

    })

    it(('Adding candidate without first name'), ()=>{
        cy.fixture('formfixtures').then(names =>{
            RegisterCandidatesPage.lastName().should('be.empty').type(names.lastNam)
            RegisterCandidatesPage.emailCandidate().should('be.empty').type(names.emailCan)
            RegisterCandidatesPage.saveSubmit().click()
            ErrorMessage.checkError(ErrorMessage.errorNot.recluitmentError.nameReq)
        })

    })

    it.only(('Adding candidate without first name'), ()=>{
        cy.fixture('formfixtures').then(names =>{
            RegisterCandidatesPage.fistName().should('be.empty').type(names.name)
            RegisterCandidatesPage.lastName().should('be.empty').type(names.lastNam)
            RegisterCandidatesPage.emailCandidate().should('be.empty').type(names.invalidEmail)
            RegisterCandidatesPage.saveSubmit().click()
            ErrorMessage.checkEmailError(ErrorMessage.errorNot.recluitmentError.emailInvalidNotif)
        })

    })

})
