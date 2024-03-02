/// <reference types="Cypress" />


before('Add New Cutomer',() =>
  {
     it('Add New Cutomer',() =>
   {
    cy.intercept("GET","https://www.globalsqa.com/angularJs-protractor/BankingProject/main.html").as("Manager Login")
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login").then(() =>
    {
      cy.wait(1000); 

      cy.intercept("https://www.globalsqa.com/angularJs-protractor/BankingProject/options.html").as("Home Page")
      cy.intercept("https://www.globalsqa.com/angularJs-protractor/BankingProject/managerView.html").as("View Options")
      cy.get(':nth-child(3) > .btn').click()
      cy.intercept("https://www.globalsqa.com/angularJs-protractor/BankingProject/newCustomer.html").as("Add New Customer")
      cy.wait(1000); 

      cy.get('[ng-class="btnClass1"]').click()
      cy.get(':nth-child(1) > .form-control').type("Cypress")
      cy.wait(1000); 

      cy.get(':nth-child(2) > .form-control').type("Tester")
      cy.wait(1000); 

      cy.get(':nth-child(3) > .form-control').type("E859AV")
      cy.wait(1000); 

      cy.get('form.ng-dirty > .btn').click()  
      cy.wait(1500); 
    })
    
    })
  })

describe('Bank Account',() =>
{
  it("",()=>
    {

      cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
      cy.get('[ng-class="btnClass3"]').click()
      cy.intercept("https://www.globalsqa.com/angularJs-protractor/BankingProject/openAccount.html").as("Search For Account")
      cy.wait(1000); 
      cy.get('.form-control').type("Cypress")
      cy.wait(1000); 
      cy.get('[ng-class="btnClass2"]').click()
      cy.wait(1000); 

      cy.get('#userSelect').select(6)
      cy.wait(1000); 

      cy.get('#currency').select(1)
      cy.wait(1000); 

      cy.get('form.ng-dirty > button').click()
      cy.wait(1000); 

      cy.get('[ng-class="btnClass3"]').click()
      cy.wait(1000); 

      cy.get('.form-control').type("Cypress").clear()
      cy.wait(1100); 

      cy.get('.form-control').type("Ron")
      cy.wait(1000); 

      cy.get(':nth-child(5) > button').click()
      cy.wait(1000); 

      cy.get('.home').click()
      cy.intercept("https://www.globalsqa.com/angularJs-protractor/BankingProject/customerView.html").as("User Login")
      cy.wait(1000); 

      cy.get('.borderM > :nth-child(1) > .btn').click()
      cy.wait(1000); 

      cy.get('#userSelect').select(5)
      cy.wait(1000); 

      cy.get('form.ng-valid > .btn').click()

      cy.intercept("https://www.globalsqa.com/angularJs-protractor/BankingProject/depositTx.html").as("Deposite Process")
      cy.wait(1000); 

      cy.get('[ng-class="btnClass2"]').click()
      cy.wait(1000); 

      cy.get('.form-control').type(1600)
      cy.wait(1000); 

      cy.get('form.ng-dirty > .btn').click()
      cy.intercept("https://www.globalsqa.com/angularJs-protractor/BankingProject/listTx.html").as("Transcription Process")
      cy.get('[ng-class="btnClass1"]').click()
      cy.wait(1000); 

      cy.get('.fixedTopBox > [style="float:left"]').click()
      cy.intercept("https://www.globalsqa.com/angularJs-protractor/BankingProject/withdrawlTx.html").as("Withdrawl Process")
      cy.get('[ng-class="btnClass3"]').click()
      cy.wait(1000); 

      cy.get('.form-control').type(1500)
      cy.get('form.ng-dirty > .btn').click()
      cy.wait(1000); 

      cy.get('[ng-class="btnClass1"]').click()
      cy.wait(1000); 

      cy.get('.fixedTopBox > [style="float:left"]').click()
      cy.wait(1000); 


      cy.get('.logout').click()
      cy.wait(1000); 

      cy.get('.home').click()
    })
  
  })

 


