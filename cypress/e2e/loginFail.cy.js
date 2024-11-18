import login from './selectores/login'


describe('Test Web Automation in testing',{testIsolation:false}, () => {

    var misDatos;

    it('Ingresar a la página',()=>{
         cy.visit('https://automationintesting.online/') 
         cy.fixture('./usser_fail')
            .then(mis_test => {
              misDatos = mis_test; 
        })  
    })

    it('Completar formulario',()=>{
        
            cy.escribir(login.form.name, misDatos.name )
            cy.escribir(login.form.email,misDatos.email)
            cy.escribir(login.form.phone,misDatos.phone)
            cy.escribir(login.form.subject,misDatos.subject)
            
            cy.wait(2000)
        
            cy.mi_click(login.form.buttonSubmit)
            cy.asersionFail(login.form.msj2)
                     
        })
        
    })