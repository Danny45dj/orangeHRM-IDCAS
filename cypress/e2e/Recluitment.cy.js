import ErrorMessage from "./Components/ErrorMessage";
import RecluitmentPage from "./Components/RecluitmentPage"
import RegisterCandidatesPage from "./Components/RegisterCandidatesPage";
describe('New cantidates', () => {
    beforeEach (()=>{
        cy.visit('/login');
        cy.fixture('users').then((user) => {
            cy.login(user[0].username,user[0].password);
        });
        RecluitmentPage.recluitmentSubmit().click()
        RecluitmentPage.AddCandidatesSubmit().click()
    })

    it.only(('Adding candidates with all fields complete'),()=>{

        cy.fixture('formfixtures').then(names =>{
            RegisterCandidatesPage.fistName().type(names.name)
            RegisterCandidatesPage.middleName().type(names.secondName)
            RegisterCandidatesPage.lastName().type(names.lastNam)
            RegisterCandidatesPage.vacancy()
            RegisterCandidatesPage.emailCandidate().type(names.emailCan)
            RegisterCandidatesPage.contactNumber().type(names.contactNum)
            RegisterCandidatesPage.resume().selectFile(names.fileAddress, {force: true})
            RegisterCandidatesPage.keywords().type(names.keywords)
            RegisterCandidatesPage.dateOfApplication().clear().type(names.date)
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

    it(('Adding candidate without last name'), ()=>{
        cy.fixture('formfixtures').then(names =>{
            RegisterCandidatesPage.fistName().should('be.empty').type(names.name)
            RegisterCandidatesPage.emailCandidate().should('be.empty').type(names.emailCan)
            RegisterCandidatesPage.saveSubmit().click()
            ErrorMessage.checkError2(ErrorMessage.errorNot.recluitmentError.nameReq)
        })

    })


    it(('Adding candidate with invalid email'), ()=>{
        cy.fixture('formfixtures').then(names =>{
            RegisterCandidatesPage.fistName().should('be.empty').type(names.name)
            RegisterCandidatesPage.lastName().should('be.empty').type(names.lastNam)
            RegisterCandidatesPage.emailCandidate().should('be.empty').type(names.invalidEmail)
            RegisterCandidatesPage.saveSubmit().click()
            ErrorMessage.checkEmailError(ErrorMessage.errorNot.recluitmentError.emailInvalidNotif)
        })

    })

    it(('Adding candidate with invalid contact number format'), ()=>{
        cy.fixture('formfixtures').then(names =>{
            RegisterCandidatesPage.fistName().should('be.empty').type(names.name)
            RegisterCandidatesPage.lastName().should('be.empty').type(names.lastNam)
            RegisterCandidatesPage.emailCandidate().should('be.empty').type(names.emailCan)
            RegisterCandidatesPage.contactNumber().type(names.wrongContactFormat)
            RegisterCandidatesPage.saveSubmit().click()
            ErrorMessage.invalidContactFormat(ErrorMessage.errorNot.recluitmentError.contactInvalidFormat)
        })

    })

})
