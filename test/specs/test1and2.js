import { expect } from '@wdio/globals'
import login from '../pageobjects/login.js'
import forums from '../pageobjects/forums.js'
import loggout from '../pageobjects/loggout.js'
import mushroomCats from '../pageobjects/mushroomCats.js'


//logging in
describe('My Login application', () => {
    //unsuccessful login first
    it('should not login with valid credentials', async () => {
        await login.open()
        await driver.maximizeWindow();
        await login.notLogin('automationtest', 'dfasdadfafd');
    })
    //correct login after
    it('should login with valid credentials', async () => {
        await login.open()

        await login.login('automationtest', 'fakepassword')
       
    })
})

//opening forums page and clicking spirit island

describe ('The test should explore the forums page', () => {
    it('should explore the forums', async () => {

        await forums.forum();
    })
})

//goes back to home page

describe ('it should return', () => {
    it('should go to the homepage', async () => {

        await login.return();
    })
})

//searches for mushroom in the search bar and clicks mushroom cats

describe ('It should find mushroom cats', () => {
    it ('should search for mushroom', async () => {

        await mushroomCats.searching('mushroom');
        await mushroomCats.mushroomCats();
    })

})

//logging the play for mushroom cats(and selecting a randomized game time)

describe('It should log the play', () => {
    it ('should view game details and comment', async () => {

        await mushroomCats.loggingPlay();
        await mushroomCats.commentLogPlay('I did not play this game.');  
    })
    
    it ('should select a random time and save', async () => {
        
        await mushroomCats.randomTime();
        await mushroomCats.doneLogging();
    })
})

// logging out of the website

describe ('The test should loggout', () => {
    it('should successfully loggout', async ()=> {

        await loggout.loggingOut();
    })
})


