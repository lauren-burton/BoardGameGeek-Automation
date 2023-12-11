import BBG from '../pageobjects/selectors.js' 


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await BBG.open()
        await driver.maximizeWindow();
        await BBG.login('automationtest', 'fakepassword')
       
    })
})

describe('it should view profile', () => {
    it('should view logged plays', async () => {

       await BBG.viewingCollection();
       
    })
})

describe('it should loggout', () => {
    it('should successfully loggout', async ()=> {

        await BBG.loggingOut();
    })

})