import {faker} from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Create Project', options, () => {
    //pré-condição 
    beforeEach(()=>{
        cy.api_deleteProjects()
        cy.login()
        
    })

    it('sucessfully',()=>{
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }

        //ação
        cy.gui_createProject(project)

        //resultados esperados
        cy.url().should('be.equal',`${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
       
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    })
})