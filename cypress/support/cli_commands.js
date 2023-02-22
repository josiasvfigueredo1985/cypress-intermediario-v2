Cypress.Commands.add('cloneViaSSH', project => {
    const domain = Cypress.config('baseUrl').replace('http://', '')
    cy.exec(`cd cypress/downloads/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)
})

Cypress.Commands.add('cloneViaHTTP', project => {
    const domain = Cypress.config('baseUrl').replace('http://', '')
    cy.exec(`cd cypress/downloads/ && git clone http://${domain}/${Cypress.env('user_name')}/${project.name}.git`)
})