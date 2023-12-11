import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/selectors.js'



describe('My Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.open()
        await driver.maximizeWindow();
        await LoginPage.notLogin('automationtest', 'dfasdadfafd');
    })
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('automationtest', 'fakepassword')
       
    })
})



describe ('The test should explore the forums page', () => {
    it('should explore the forums', async () => {

        await LoginPage.forums();
    })
})

describe ('It should find mushroom cats', () => {
    it ('should search for mushroom', async () => {

        await LoginPage.searching('mushroom');
        await LoginPage.mushroomCats();
    })

})

describe('It should log the play', () => {
    it ('should view game details and comment', async () => {

        await LoginPage.loggingPlay();
        await LoginPage.commentLogPlay('I did not play this game.');  
    })
    
    it ('should select a random time and save', async () => {
        
        await LoginPage.randomTime();
        await LoginPage.doneLogging();
    })
})

describe('it should view profile', () => {
    it('should view logged plays', async () => {

       await LoginPage.viewingCollection();
       
    })
})

describe('it should loggout', () => {
    it('should successfully loggout', async ()=> {

        await LoginPage.loggingOut();
    })

})

