import { faker } from '@faker-js/faker'

describe('git clone SSH', () => {
    const project = {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
    }
    beforeEach(() => {
        cy.api_deleteProjects()
        cy.api_createProject(project)
    })
    it('successfully SSH', () => {
        cy.cloneViaSSH(project)
        cy.readFile(`cypress/downloads/${project.name}/README.md`)
            .should('contain', `# ${project.name}`)
            .and('contain', project.description)
    })
})

describe('git clone HTTP', () => {
    const project = {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
    }
    beforeEach(() => {
        cy.api_deleteProjects()
        cy.api_createProject(project)
    })
    it('successfully HTTP', () => {
        cy.cloneViaHTTP(project)
        cy.readFile(`cypress/downloads/${project.name}/README.md`)
            .should('contain', `# ${project.name}`)
            .and('contain', project.description)
    })
})
