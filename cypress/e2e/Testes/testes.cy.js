///<reference types="cypress"/>

describe("Testes de funcionalidades",()=>{
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it("Deve adicionar um contato corretamente",()=>{
        cy.get("input[type=text]").type("Gabriel")
        cy.get("input[type=email]").type("gabriel@mail.com")
        cy.get("input[type=tel]").type("12345678")
        cy.get('.adicionar').click()
    })
    it("Deve editar um contato corretamente",()=>{
        cy.get('.edit').first().click()
        cy.get("input[type=text]").type("Gabriel Ramos")
        cy.get("input[type=email]").type("gabriel@mail.com.br")
        cy.get("input[type=tel]").type("12321678")
        cy.get(".alterar").click()
    })
    it("Deve remover um contato corretamente",()=>{
        cy.get(".delete").first().click()
    })
})