import pantalla from './selectores/pantalla'

describe('Test Web Automation in testing',{testIsolation:false}, () => {


    it('Ingresar a la página y verificar el título de la página',()=>{
         cy.visit('https://automationintesting.online/')
         cy.title().should('eq','Restful-booker-platform demo')   
    })

    it('Verificar información del hotel',()=>{
        cy.get(pantalla.infHotel.hotel).contains('Shady Meadows B&B')
    })

    it('Imagen visible',()=>{
        cy.get(pantalla.roomsImagen.rooms).should('be.visible')
    })

    it('Validar texto',()=>{
        cy.get(pantalla.confTexto.text).contains('Welcome to Shady Meadows').should('exist')
    })

})