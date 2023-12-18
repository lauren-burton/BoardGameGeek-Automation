import login from '../pageobjects/login.js'
import viewCollection from '../pageobjects/viewCollection.js'
import otherUsers from '../pageobjects/otherUsers.js'
import loggout from '../pageobjects/loggout.js'

//logging in

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await login.open();
        await login.login('automationtest', 'fakepassword');
       
    })
})

//clicking profile and viewing logged plays

describe('it should view profile', () => {
    it('should view logged plays', async () => {

       await viewCollection.viewingCollection();
       
    })
})

describe('it should open the calendar', () => {
    it('should open the calendar', async () => {

        await viewCollection.filteringByDate();
    })

})
//goes to home page

describe ('it should return', () => {
    it('should go to the homepage', async () => {

        await login.return();
    }) 
})

//clicks community and finds other people in the community 

describe('it should find other users', () => {
    it('should look for other players', async () => {

       await otherUsers.findingOthers();
       await otherUsers.findingGamers('84043');
    })
})

//logging out of the webiste

describe('it should loggout', () => {
    it('should successfully loggout', async ()=> {

        await loggout.loggingOut();
    })

})