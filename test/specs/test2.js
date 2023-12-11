import BBG from '../pageobjects/selectors.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await BBG.open()
        await driver.maximizeWindow();
        await BBG.login('automationtest', 'fakepassword')
       
    })
})

describe ('It should find mushroom cats', () => {
    it ('should search for mushroom', async () => {

        await BBG.searching('mushroom');
        await BBG.mushroomCats();
    })

})

describe('It should log the play', () => {
    it ('should view game details and comment', async () => {

        await BBG.loggingPlay();
        await BBG.commentLogPlay('I did not play this game.');  
    })
    
    it ('should select a random time and save', async () => {
        
        await BBG.randomTime();
        await BBG.doneLogging();
    })
})

describe('it should loggout', () => {
    it('should successfully loggout', async ()=> {

        await BBG.loggingOut();
    })

})
