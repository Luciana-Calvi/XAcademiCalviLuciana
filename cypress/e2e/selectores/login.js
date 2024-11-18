class login{

    form = {
        name : '[data-testid="ContactName"]',
        email : '[data-testid="ContactEmail"]',
        phone : '[data-testid="ContactPhone"]',
        subject : '[data-testid="ContactSubject"]',
        message : '[data-testid="ContactDescription"]',
        msj: ':nth-child(2) > div > h2',
        buttonSubmit : '#submitContact',
        msj2:'.alert'
      
    }

}

module.exports = new login();